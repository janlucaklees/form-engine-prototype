import { AbstractField, type BaseFieldState } from "form-engine";

export default class BarField extends AbstractField {
  public override handleInput(
    nextValue: string,
    rootState: object,
  ): BaseFieldState {
    const state: BaseFieldState = {
      value: nextValue,
      isDisabled: false,
    };

    const x = rootState["foo"].value;
    if (rootState["foo"].value === "foo") {
      state.isDisabled = true;
    }

    return state;
  }
}
