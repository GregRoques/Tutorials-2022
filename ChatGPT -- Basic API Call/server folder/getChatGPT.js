// =================== packages and configurations
const express = require("express");
const router = express.Router();

import { apiKey } from "./apiKey";
import { Configuration, OpenAIApi } from "openai";

const openAi = new OpenAIApi(
    new Configuration({
      apiKey: apiKey,
    })
  )

  // =================== script

  router.post("/", async (req, res) => {
    try{
        const data = req.body;
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: data}],
        })
        return response.data.choices[0].message.content
    } catch(err){
        throw new Error(err);
    }
  })

  module.exports = router;