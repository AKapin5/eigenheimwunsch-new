import { rootReducer } from "./redux/reducers/rootReducer";
export type RootState = ReturnType<typeof rootReducer>;

declare module "react-imask" {
  import Imask from "imask";

  export type IMaskInputProps = Partial<
    Pick<
      Imask.AnyMaskedOptions,
      | "mask"
      | "value"
      | "prepare"
      | "validate"
      | "commit"
      | "overwrite"
      | "placeholderChar"
      | "lazy"
      | "definitions"
      | "blocks"
      | "pattern"
      | "format"
      | "parse"
      | "autofix"
      | "radix"
      | "thousandsSeparator"
      | "mapToRadix"
      | "scale"
      | "signed"
      | "normalizeZeros"
      | "padFractionalZeros"
      | "min"
      | "max"
      | "dispatch"
      | "className"
    >
  > & {
    unmask?: boolean;
    onAccept?: <T>(...args: T[]) => void;
    onComplete?: <T>(...args: T[]) => void;
  };

  /**
   * A function that decorates a react component
   * with 'imask' props
   * @param Component Any React Component
   */
  export function IMaskMixin<T, D>(
    Component: React.ComponentType<{ inputRef: React.Ref<D> } & T>
  ): React.ComponentType<T & IMaskInputProps>;

  export const IMaskInput: React.ComponentType<IMaskInputProps>;
}

declare module "react-redux" {
	export interface DefaultRootState extends RootState {}
}