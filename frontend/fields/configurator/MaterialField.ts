import { computed, type ComputedRef } from "vue";
import { SelectFieldDefinition } from "form-engine";
import validate from "validate.js";

export default class MaterialField extends SelectFieldDefinition {
  public override getOptions(): Array<{ label: string; value: string }> {
    return [
      {
        label: "Material A",
        value: "material-a",
      },
      {
        label: "Material B",
        value: "material-b",
      },
      {
        label: "Other",
        value: "material-other",
      },
    ];
  }
}
