import { useEffect, useState } from "react";
import { lotsService, Lot } from "../services/database/lots/lotsService";

export const useLots = (userId?: string) => {
  const [lots, setLots] = useState<Lot[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = lotsService.subscribeToLots(
      (fetchedLots) => {
        setLots(fetchedLots);
        if (loading) {
          setLoading(false);
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
