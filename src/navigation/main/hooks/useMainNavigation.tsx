import { LOT_STATUS } from "../../../constants";
import { useAppSelector } from "../../../hooks";
import { useLots } from "../../../hooks/useLots";

export const useMainNavigation = () => {
  const { user } = useAppSelector((state) => state.user);
  const { lots } = useLots(user?.userId, LOT_STATUS.sold);
  const soldLotsCount = lots?.length || undefined;

  return { soldLotsCount };
};
