import { computed, type ComputedRef } from "vue";
import { BaseFieldDefinition } from "form-engine";
import validate from "validate.js";

export default class NameField extends BaseFieldDefinition {
  protected override isDisasbled(): ComputedRef<boolean> {
    return computed(() => {
      console.log(this.form);
      console.log(this.form.resolveFieldByPath("./material"));

      return (
        this.form!.resolveFieldByPath("./material")!.useFieldState().value !==
        "material-other"
      );
    });
  }
}
