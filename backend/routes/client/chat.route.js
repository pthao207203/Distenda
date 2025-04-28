const express = require("express");
const router = express.Router();
const { chatWithOpenAI } = require("../../controllers/client/chat.service.BE");

router.post("/", async (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);

  try {
    const reply = await chatWithOpenAI(message);
    console.log("Response from OpenAI:", reply);
    res.json({ reply });
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).send("Error processing message");
  }
});

module.exports = router;
