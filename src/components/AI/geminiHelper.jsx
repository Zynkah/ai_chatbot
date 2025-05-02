export async function getGeminiResponse(prompt) {
  const res = await fetch('/api/gemini', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) {
    return "Sorry, I couldn't reach the AI service.";
  }
  try {
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch {
    return "Sorry, I couldn't understand the AI response.";
  }
}
