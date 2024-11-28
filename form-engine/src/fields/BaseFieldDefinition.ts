import { computed, type ComputedRef, reactive } from "vue";
import type BaseFieldState from "./BaseFieldState.ts";
import Node from "../core/Node";

export default class BaseFieldDefinition {
  protected state: BaseFieldState;
  protected form?: Node;

  public setFormNode(form: Node) {
    this.form = form;
  }

  public init() {
    this.state = reactive({
      value: "",
      hasFocus: false,
      wasTouched: false,
      wasValid: false,

      isDisabled: this.isDisasbled(),
      isValid: this.isValid(),
      isUserValid: this.isUserValid(),
      showValidation: this.showValidation(),
      validationMessages: this.getValidationMessages(),
    });

    watch(
      computed(() => this.state.isValid),
      (newValue, oldValue) => {
        if (newValue === false && oldValue === true) {
          this.state.wasValid = true;
        }
      },
    );
  }

  public useFieldState() {
    return this.state;
  }

  public handleInput(nextValue: string) {
    this.state.value = nextValue;
  }

  public handleFocus(currentState: BaseFieldState) {
    this.state.hasFocus = true;
  }

  public handleBlur(currentState: BaseFieldState) {
    this.state.hasFocus = false;
    this.state.wasTouched = true;
  }

  protected isDisasbled(): boolean | ComputedRef<boolean> {
    return false;
  }

  protected getValidationMessages():
    | Array<string>
    | ComputedRef<Array<string>> {
    return [];
  }

  protected isValid(): boolean | ComputedRef<boolean> {
    return computed(() => {
      if (this.state.isDisabled) {
        return true;
      }

      return this.state.validationMessages.length === 0;
    });
  }

  protected isUserValid() {
    return computed(() => {
      if (!this.state.showValidation) {
        return "initial";
      }

      return this.state.isValid ? "valid" : "invalid";
    });
  }

  protected showValidation() {
    return computed(() => {
      if (this.state.isDisabled) {
        return false;
      }

      return this.state.wasTouched || this.state.wasValid;
    });
  }
}
