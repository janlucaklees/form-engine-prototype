import { type ComputedRef, reactive } from "vue";
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
      isDisabled: this.isDisasbled(),
    });
  }

  public useFieldState() {
    return this.state;
  }

  public handleInput(nextValue: string) {
    this.state.value = nextValue;
  }

  protected isDisasbled(): boolean | ComputedRef<boolean> {
    return false;
  }
}
