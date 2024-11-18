import type BaseFieldState from "../BaseFieldState.ts";

export default abstract class AbstractField {
  public handleInput(nextValue: string, rootState: object): BaseFieldState {
    const state: BaseFieldState = {
      value: nextValue,
      isDisabled: false,
    };

    return state;
  }
}
