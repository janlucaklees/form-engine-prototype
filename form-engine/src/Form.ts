import { reactive, computed } from "vue";
import BaseFieldDefinition, {
  BaseFieldDefinitionConstructor,
} from "./fields/BaseFieldDefinition";

export default class Form {
  private state = reactive({});
  private fieldDefinitions = new Map<string, BaseFieldDefinition>();

  public registerField(
    fieldName: string,
    fieldDefinitionClass: BaseFieldDefinitionConstructor,
  ) {
    console.assert(!this.fieldDefinitions.has(fieldName));

    const fieldDefinition = new fieldDefinitionClass(this.state);

    this.fieldDefinitions.set(fieldName, fieldDefinition);

    this.state[fieldName] = fieldDefinition.getReactiveState();
  }

  public handleInput(fieldName: string, nextValue: string) {
    console.assert(this.fieldDefinitions.has(fieldName));

    this.state[fieldName].value = this.fieldDefinitions
      .get(fieldName)!
      .handleInput(nextValue);
  }

  public useFieldState(fieldName: string) {
    return computed(() => this.state[fieldName]);
  }
}
