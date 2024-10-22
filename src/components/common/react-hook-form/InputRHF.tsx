import {
  Controller,
  ControllerProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { TextInputProps } from "react-native";
import { styles } from "./InputRHF.styles";
import { TextCustom } from "../text/TextCustom";
import { TextInputCustom } from "../input/TextInputCustom";

type TextInputPartial = Omit<
  TextInputProps,
  "onChangeText" | "value" | "style"
>;

interface InputRHFProps<TFieldValues extends FieldValues>
  extends Omit<ControllerProps<TFieldValues>, "render">,
    TextInputPartial {
  label: string;
  defaultValue?: any;
  errors?: FieldErrors<TFieldValues>;
}

// interface InputRHFProps<TFieldValues extends FieldValues>
//   extends ControllerProps<TFieldValues>,
//     TextInputPartial {
//   label: string;
//   defaultValue?: any;
//   errors?: FieldErrors<TFieldValues>;
// }

export const InputRHF = <TFieldValues extends FieldValues>({
  label,
  errors,
  control,
  name,
  rules,
  placeholder,
  keyboardType,
  autoCapitalize,
}: InputRHFProps<TFieldValues>) => {
  return (
    <>
      <TextCustom style={styles.label}>{label}</TextCustom>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        )}
      />
      {errors?.[name]?.message && (
        <TextCustom style={styles.error}>
          {errors[name]?.message as string}
        </TextCustom>
      )}
    </>
  );
};
