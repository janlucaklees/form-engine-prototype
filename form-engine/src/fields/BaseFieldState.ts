import { type ComputedRef } from "vue";

type BaseFieldStateStatic = {
  value: string;
  hasFocus: boolean;
  wasTouched: boolean;
  showValidation: boolean;
  isDisabled: boolean;
  isValid: boolean;
  isUserValid: "initial" | "valid" | "invalid";
  validationMessages: Array<string>;
};

type BaseFieldState = {
  [K in keyof BaseFieldStateStatic]:
    | BaseFieldStateStatic[K]
    | ComputedRef<BaseFieldStateStatic[K]>;
};

export default BaseFieldState;
