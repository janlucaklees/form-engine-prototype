import { BaseFieldDefinition, type BaseFieldState } from "form-engine";

export default class NestedBarField extends BaseFieldDefinition {
  protected override isDisasbled(): ComputedRef<boolean> {
    return computed(
      () => this.form.getRootNode().useFieldState("foo").value === "foo",
    );
  }
}
