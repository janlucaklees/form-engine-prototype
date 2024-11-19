import { type ComputedRef } from "vue";
import type BaseFieldState from "./BaseFieldState.ts";

export default class BaseFieldDefinition {
  constructor(protected readonly state: object) {}

  public handleInput(nextValue: string) {
    return nextValue;
  }

  public getReactiveState(): BaseFieldState {
    return {
      value: "",
      isDisabled: this.isDisasbled(),
    };
  }

  protected isDisasbled(): boolean | ComputedRef<boolean> {
    return false;
  }
}

export type BaseFieldDefinitionConstructor = new (
  state: object,
) => BaseFieldDefinition;
