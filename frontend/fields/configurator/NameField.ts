import { computed, type ComputedRef } from "vue";
import { BaseFieldDefinition } from "form-engine";
import validate from "validate.js";

export default class NameField extends BaseFieldDefinition {
  protected override getValidationMessages():
    | Array<string>
    | ComputedRef<Array<string>> {
    return computed(
      () =>
        validate.single(this.state.value, {
          presence: { allowEmpty: false },
          length: { maximum: 10 },
        }) ?? [],
    );
  }
}
