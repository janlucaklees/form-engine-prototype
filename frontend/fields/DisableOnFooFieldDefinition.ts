import { BaseFieldDefinition, type BaseFieldState } from "form-engine";

export default class DisableOnFooFieldDefinition extends BaseFieldDefinition {
  constructor(private readonly path: string) {
    super();
  }

  protected override isDisasbled(): ComputedRef<boolean> {
    return computed(() => {
      return (
        this.form!.resolveFieldByPath(this.path)!.useFieldState().value ===
        "foo"
      );
    });
  }
}
