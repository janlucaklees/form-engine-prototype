import { FieldDefinition, type FieldState } from "form-engine";

export default class BarField extends FieldDefinition {
  public override handleInput(
    nextValue: string,
    rootState: object,
  ): FieldState {
    const state: FieldState = {
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
