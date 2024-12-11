import { useEffect, useState } from "react";
import { lotsService, Lot } from "../services/database/lots/lotsService";
import { LotStatus } from "../constants";

export const useLots = (userId?: string, status?: LotStatus) => {
  const [lots, setLots] = useState<Lot[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = lotsService.subscribeToLots(
      (fetchedLots) => {
        const allLotsHaveCreatedAt = fetchedLots.every((lot) =>
          Boolean(lot.createdAt)
        );

        if (allLotsHaveCreatedAt) {
          status
            ? setLots(fetchedLots.filter((lot) => lot.status === status))
            : setLots(fetchedLots);
          setLoading(false);
        } else {
          setLoading(true);
        }
      },
      (err) => {
        setError(err.message || "Failed to fetch lots.");
        setLoading(false);
      },
      userId
    );

    return () => unsubscribe();
  }, []);

  return { lots, loading, error };
};
