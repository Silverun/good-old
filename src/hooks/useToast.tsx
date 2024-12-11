import Toast, { ToastOptions } from "react-native-root-toast";
import { useThemeCustom } from "./useThemeCustom";

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export const useToast = () => {
  const { theme } = useThemeCustom();

  const showToast = (
    message: string,
    type: ToastType = TOAST_TYPES.SUCCESS
  ) => {
    const bg =
      type === TOAST_TYPES.SUCCESS
        ? theme.buttonBackground
        : theme.errorBackground;

    const toastConfig: ToastOptions = {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: bg,
      textColor: theme.buttonTextColor,
      opacity: 1,
    };

    Toast.show(message, toastConfig);
  };

  return { showToast };
};
