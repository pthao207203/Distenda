import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

const model = "gemini-2.0-flash-thinking-exp-01-21";

export async function getGeminiReply(prompt) {
  const config = { responseMimeType: "text/plain" };

  const contents = [
    { role: "user", parts: [{ text: prompt }] }
  ];

  try {
    const response = await ai.models.generateContentStream({ model, config, contents });
    let fullResponse = "";
    for await (const chunk of response) {
      fullResponse += chunk.text;
    }
    return fullResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "⚠️ Có lỗi khi kết nối đến Gemini AI.";
  }
}
