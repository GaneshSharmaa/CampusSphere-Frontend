const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function apiFetch(
    endpoint,
    options = {}
) {
    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
        }
    );

    if (!response.ok) {
        const message = await response.text();

        throw new Error(
        message || "API request failed"
        );
    }

    return response.json();
}