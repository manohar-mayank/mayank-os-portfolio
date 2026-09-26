const configuredBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
const baseUrl = import.meta.env.DEV ? "" : configuredBaseUrl || "";

function readError(response) {
  return response
    .json()
    .catch(() => ({}))
    .then((payload) =>
      payload.answer ||
      payload.error ||
      `Request failed with status ${response.status}`,
    );
}

export async function askManma(message, conversation) {
  try {
    const response = await fetch(`${baseUrl}/manma`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        conversation,
      }),
    });

    if (!response.ok) throw new Error(await readError(response));
    const payload = await response.json();
    if (payload.ok === false) {
      throw new Error(payload.answer || payload.error || "Manma request failed");
    }
    return payload;
  } catch (error) {
    console.error("Manma API request failed:", error);
    throw new Error(error.message || "Manma is temporarily unavailable. Try again.");
  }
}