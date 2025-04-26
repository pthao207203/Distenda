import { GoogleGenAI } from "@google/genai";

// Lấy API Key từ biến môi trường
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

const model = "gemini-2.0-flash-thinking-exp-01-21";

export async function getGeminiReply(prompt, user) {
  const config = {
    responseMimeType: "text/plain",
  };

  const userContext = user
    ? `Thông tin người dùng:\n- Tên: ${user.UserFullName}\n- Email: ${user.UserEmail}\n- Số tiền: ${user.UserMoney} VNĐ\n\n`
    : "";
  console.log("🧠 Prompt gửi tới Gemini:");
  console.log(userContext + prompt); // 👈 dòng này sẽ giúp debug kỹ hơn

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${userContext}${prompt}`,
        },
      ],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

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
