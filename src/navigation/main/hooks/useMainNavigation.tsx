import { useEffect, useState } from "react";
import { LOT_STATUS } from "../../../constants";
import { useAppSelector } from "../../../hooks";
import { lotsService } from "../../../services/database/lots/lotsService";
import { useToast } from "../../../hooks/useToast";

export const useMainNavigation = () => {
  const { user } = useAppSelector((state) => state.user);
  const [soldLotsCount, setSoldLotsCount] = useState<number>();
  const { showToast } = useToast();

  useEffect(() => {
    if (user) {
      lotsService.subscribeToLots(
        (lots) =>
          setSoldLotsCount(
            lots.filter((lot) => lot.status === LOT_STATUS.sold).length ||
              undefined
          ),
        (error) => showToast(error.message, "error"),
        user.userId
      );
    }
  }, [user]);

  return { soldLotsCount };
};
