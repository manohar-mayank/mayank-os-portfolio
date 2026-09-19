const baseUrl =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000";

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

    // Read response as text first
    const text = await response.text();

    // Handle empty response
    if (!text) {
      throw new Error(
        `Server returned an empty response (${response.status})`
      );
    }

    // Convert JSON string → JavaScript object
    let payload;

    try {
      payload = JSON.parse(text);
    } catch (error) {
      console.error("Invalid JSON from server:", text);
      throw new Error("Server returned invalid JSON");
    }

    // Check HTTP status
    if (!response.ok) {
      throw new Error(
        payload?.answer ||
        payload?.error ||
        `Request failed with status ${response.status}`
      );
    }

    // Check your API's success field
    if (payload.ok === false) {
      throw new Error(
        payload.answer ||
        payload.error ||
        "Manma request failed"
      );
    }

    return payload;

  } catch (error) {
    console.error("Manma API request failed:", error);

    throw new Error(
      "Manma is temporarily unavailable. Try again."
    );
  }
}