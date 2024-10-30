import {
  Controller,
  ControllerProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { styles } from "./RHFField.styles";
import { TextCustom, TextCustomProps } from "../text/TextCustom";
import {
  TextInputCustom,
  TextInputCustomProps,
} from "../input/TextInputCustom";
import { View } from "react-native";

type ControllerRenderOptional<T extends FieldValues> = Partial<
  ControllerProps<T>
> &
  Omit<ControllerProps<T>, "render">;

interface RHFFieldProps<TFieldValues extends FieldValues> {
  label: {
    text: string;
  } & TextCustomProps;
  controller: ControllerRenderOptional<TFieldValues>;
  input: TextInputCustomProps;
  error: {
    errors?: FieldErrors<TFieldValues>;
  } & TextCustomProps;
}

export const RHFField = <TFieldValues extends FieldValues>({
  label,
  controller,
  input,
  error,
}: RHFFieldProps<TFieldValues>) => {
  const { text, style } = label;
  const { control, name, rules, render } = controller;
  const {
    style: inputStyle,
    placeholder,
    keyboardType,
    autoCapitalize,
    ...inputProps
  } = input;
  const { errors, style: errorStyle } = error;

  return (
    <View>
      <TextCustom style={[styles.label, style]}>{text}</TextCustom>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={
          render
            ? render
            : ({ field: { onChange, value } }) => (
                <TextInputCustom
                  style={[styles.input, inputStyle]}
                  placeholder={placeholder}
                  onChangeText={onChange}
                  value={value}
                  keyboardType={keyboardType}
                  autoCapitalize={autoCapitalize}
                  {...inputProps}
                />
              )
        }
      />
      {errors?.[name]?.message && (
        <TextCustom style={[styles.error, errorStyle]}>
          {errors[name]?.message as string}
        </TextCustom>
      )}
    </View>
  );
};
