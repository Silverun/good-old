import { useAppSelector } from "./useRedux";

export const useThemeCustom = () => {
  const { theme, isDarkTheme } = useAppSelector((state) => state.theme);

  return {
    theme,
    isDarkTheme,
  };
};
