import {
  Controller,
  ControllerProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./InputRHF.styles";

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

const InputRHF = <TFieldValues extends FieldValues>({
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
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInput
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
        <Text style={styles.error}>{errors[name]?.message as string}</Text>
      )}
    </>
  );
};
export default InputRHF;
