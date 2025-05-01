import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getGeminiResponse(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text;
}


// export async function getGeminiResponse(prompt) {
//   const res = await fetch('/api/gemini', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt }),
//   });
//   if (!res.ok) {
//     return "Sorry, I couldn't reach the AI service.";
//   }
//   try {
//     const data = await res.json();
//     console.log("Gemini API raw response:", data);
//     return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
//   } catch {
//     return "Sorry, I couldn't understand the AI response.";
//   }
// }
