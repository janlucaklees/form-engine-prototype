import { reactive } from "vue";
import BaseFieldDefinition, {
  BaseFieldDefinitionConstructor,
} from "../fields/BaseFieldDefinition";
import path from "path-browserify";

export default class Node {
  private state = reactive({});
  private childNodes = new Map<string, Node>();
  private fieldDefinitions = new Map<string, BaseFieldDefinition>();

  constructor(
    private readonly name: string,
    private readonly parentNode: Node | undefined,
  ) {}

  public getName() {
    return this.name;
  }

  public getPath() {
    if (this.hasParentNode()) {
      return `${this.getParentNode().getPath()}/${this.getName()}`;
    } else {
      return "/";
    }
  }

  public getRootNode() {
    if (!this.parentNode) {
      return this;
    }

    return this.parentNode.getRootNode();
  }

  public resolveNodeByPath(nodePath: string) {
    const absolutePath = path.resolve(this.getPath(), nodePath);
    const nodeNames = absolutePath
      .split("/")
      .filter((nodeName: string) => nodeName.length > 0);

    let node: Node = this.getRootNode();
    for (const nodeName of nodeNames) {
      if (!node.hasChildNode(nodeName)) {
        return undefined;
      }

      node = node.getChildNode(nodeName);
    }

    return node;
  }

  public hasParentNode(): this is { getParentNode: Node } {
    return !!this.parentNode;
  }

  public getParentNode(): Node | undefined {
    return this.parentNode;
  }

  public registerChildNode(childName: string, childNode: Node) {
    this.childNodes.set(childName, childNode);
  }

  public hasChildNode(childName: string) {
    return this.childNodes.has(childName);
  }

  public getChildNode(childName: string) {
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

  public hasField(fieldName: string) {
    return this.fieldDefinitions.has(fieldName);
  }

  public getField(fieldName: string): BaseFieldDefinition {
    console.assert(this.fieldDefinitions.has(fieldName));

    return this.fieldDefinitions.get(fieldName)!;
  }

  public resolveFieldByPath(fieldPath: string) {
    // Make sure we have a path that actually ends with something that could be a filed name.
    // e.g. not '/'
    const fieldName = path.basename(fieldPath);
    if (!fieldName) {
      return undefined;
    }

    // Get the node that hosts the field.
    const nodePath = path.dirname(fieldPath);
    const node = this.resolveNodeByPath(nodePath);
    if (!node || !node.hasField(fieldName)) {
      return undefined;
    }

    return node.getField(fieldName);
  }
}
