import { type ComputedRef } from "vue";
import { BaseFieldStateStatic } from "../BaseFieldState";

type SelectFieldStateStatic = BaseFieldStateStatic & {
  options: Array<{ label: string; value: string }>;
};

type SelectFieldState = {
  [K in keyof BaseFieldStateStatic]:
    | BaseFieldStateStatic[K]
    | ComputedRef<BaseFieldStateStatic[K]>;
};

export default SelectFieldState;
