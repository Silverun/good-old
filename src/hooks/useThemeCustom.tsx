import { useAppSelector } from "./useRedux";

export const useThemeCustom = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  return {
    theme,
  };
};
