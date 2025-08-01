export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
      apiKey,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
