import { reactive } from "vue";
import BaseFieldDefinition, {
  BaseFieldDefinitionConstructor,
} from "../fields/BaseFieldDefinition";

export default class Node {
  private state = reactive({});
  private childNodes = new Map<string, Node>();
  private fieldDefinitions = new Map<string, BaseFieldDefinition>();

  constructor(private readonly parentNode: Node | undefined) {}

  public getRootNode() {
    if (!this.parentNode) {
      return this;
    }

    return this.parentNode.getRootNode();
  }

  public getParentNode() {
    return this.parentNode;
  }

  public registerChildNode(childName: string, childNode: Node) {
    this.childNodes.set(childName, childNode);
  }

  public getChildNode(childName: string) {
    console.assert(this.childNodes.has(childName));

    // TODO: Wrap in read-only proxy.
    return this.childNodes.get(childName);
  }

  public registerField(
    fieldName: string,
    fieldDefinitionClass: BaseFieldDefinitionConstructor,
  ) {
    console.assert(!this.fieldDefinitions.has(fieldName));

    console.log("registerField", fieldName);

    const fieldDefinition = new fieldDefinitionClass(this.state, this);

    this.fieldDefinitions.set(fieldName, fieldDefinition);

    this.state[fieldName] = fieldDefinition.getReactiveState();
  }

  public handleInput(fieldName: string, nextValue: string) {
    console.assert(this.fieldDefinitions.has(fieldName));

    this.state[fieldName].value = this.fieldDefinitions
      .get(fieldName)!
      .handleInput(nextValue);
  }

  public useFieldState(childName: string) {
    console.assert(this.fieldDefinitions.has(childName));

    return this.state[childName];
  }
}
