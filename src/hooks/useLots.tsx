import { useEffect, useState } from "react";
import { databaseService, Lot } from "../services/database/databaseService";
import { useAuth } from "./useAuth";

export const useLots = () => {
  const [lots, setLots] = useState<Lot[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = databaseService.subscribeToLots(
      (fetchedLots) => {
        setLots(fetchedLots);
        if (loading) {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message || "Failed to fetch lots.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { lots, loading, error };
};
