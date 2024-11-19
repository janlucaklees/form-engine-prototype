import { BaseFieldDefinition } from "form-engine";

export default class BarFieldNested extends BaseFieldDefinition {
  protected override isDisasbled(): ComputedRef<boolean> {
    return computed(
      () =>
        this.form.getRootNode().getChildNode("group").useFieldState("foo")
          .value === "foo",
    );
  }
}
