type BaseFieldStateStatic = {
  value: string;
  isDisabled: boolean;
};

type BaseFieldState = {
  [K in keyof BaseFieldStateStatic]:
    | BaseFieldStateStatic[K]
    | ComputedRef<BaseFieldStateStatic[K]>;
};

export default BaseFieldState;
