import BaseFieldDefinition from "../BaseFieldDefinition.ts";
import SelectFieldState from "SelectFieldState.ts";
import SelectInput from "../../components/input-types/SelectInput.vue";

export default class SelectFieldDefinition extends BaseFieldDefinition {
  protected override state: SelectFieldState;

  public override getComponent() {
    return SelectInput;
  }

  public getOptions(): Array<{ label: string; value: string }> {
    return [];
  }

  public override init() {
    this.state = reactive({
      value: "",
      hasFocus: false,
      wasTouched: false,
      wasValid: false,
      options: this.getOptions(),

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
}
