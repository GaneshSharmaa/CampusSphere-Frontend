import { useEffect, useState } from "react";
import { apiFetch } from "../lib/api";

export function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
        try {
            setLoading(true);
            setError(null);

            const result = await apiFetch(endpoint);

            if (!cancelled) {
            setData(result);
            }
        } catch (err) {
            if (!cancelled) {
            setError(err);
            }
        } finally {
            if (!cancelled) {
            setLoading(false);
            }
        }
        }

        load();

        return () => {
        cancelled = true;
        };
    }, [endpoint]);

    return {
        data,
        loading,
        error,
    };
}