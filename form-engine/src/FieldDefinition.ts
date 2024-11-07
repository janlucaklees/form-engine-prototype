import type FieldState from "./FieldState";

export default class FieldDefinition {
  public handleInput(nextValue: string, rootState: object): FieldState {
    const state: FieldState = {
      value: nextValue,
    };

    return state;
  }
}
