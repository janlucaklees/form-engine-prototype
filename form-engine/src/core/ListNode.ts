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

  public prepend() {
    this.items.unshift(uuidv4());
  }

  public insertAt(index: number) {
    console.assert(0 <= index && index <= this.items.length);

    this.items.splice(index, 0, uuidv4());
  }

  public insertBefore(uuid: string) {
    console.assert(this.items.includes(uuid));

    this.insertAt(this.items.indexOf(uuid));
  }

  public insertAfter(uuid: string) {
    console.assert(this.items.includes(uuid));

    this.insertAt(this.items.indexOf(uuid) + 1);
  }

  public deleteAt(index: number) {
    console.assert(0 <= index && index < this.items.length);

    this.items.splice(index, 1);
  }

  public delete(uuid: string) {
    console.assert(this.items.includes(uuid));

    this.deleteAt(this.items.indexOf(uuid));
  }
}
