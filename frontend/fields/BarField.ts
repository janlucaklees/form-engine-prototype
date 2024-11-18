import { BaseFieldDefinition, type BaseFieldState } from "form-engine";

export default class BarField extends BaseFieldDefinition {
  public override getReactiveState(): BaseFieldState {
    return {
      value: "",
      isDisabled: computed(() => this.state["foo"].value === "foo"),
    };
  }
}
