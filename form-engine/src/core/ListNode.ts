import { Reactive, reactive } from "vue";
import Node from "./Node";
import { v4 as uuidv4 } from "uuid";
import { BaseFieldDefinitionConstructor } from "../fields/BaseFieldDefinition";

export default class ListNode extends Node {
  private items: Reactive<Array<string>> = reactive([uuidv4()]);

  public override registerField(
    fieldName: string,
    fieldDefinitionClass: BaseFieldDefinitionConstructor,
  ) {
    throw new Error("Method not allowed!");
  }

  public override handleInput(fieldName: string, nextValue: string) {
    throw new Error("Method not allowed!");
  }

  public override useFieldState(childName: string) {
    throw new Error("Method not allowed!");
  }

  public useItems() {
    return this.items;
  }

  public append() {
    this.items.push(uuidv4());
  }

  public delete() {
    console.log("delete");
  }
}
