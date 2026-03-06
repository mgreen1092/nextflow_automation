const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xyknypbo";

export async function submitToFormspree(payload) {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error("missing_endpoint");
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("submit_failed");
  }
}
