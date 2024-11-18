import { BaseFieldDefinition, type BaseFieldState } from "form-engine";

export default class BarField extends BaseFieldDefinition {
  protected override isDisasbled(): ComputedRef<boolean> {
    return computed(() => this.state["foo"].value === "foo");
  }
}
