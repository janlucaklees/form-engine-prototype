import { reactive, computed } from "vue";
import AbstractField from "./field-definitions/AbstractField";

export default class Form {
  private state = reactive({});
  private fieldDefinitions = new Map<string, AbstractField>();

  public registerField(fieldName: string, fieldDefinition: AbstractField) {
    // TODO: Assert that the field name is unique.

    this.fieldDefinitions.set(fieldName, fieldDefinition);

    this.state[fieldName] = {
      value: "",
    };
  }

  public handleInput(fieldName: string, nextValue: string) {
    console.assert(this.fieldDefinitions.has(fieldName));

    const fieldState = this.fieldDefinitions
      .get(fieldName)!
      .handleInput(nextValue, this.state);

    this.state[fieldName] = fieldState;
  }

  public useFieldState(fieldName: string) {
    return computed(() => this.state[fieldName]);
  }
}
