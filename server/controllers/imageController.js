
const axios = require("axios");
const FormData = require("form-data");
const { GoogleGenAI, Modality } = require("@google/genai");


//  Function to generate Img...
const generateImg = async (req, res ) => {
    try {
        const { prompt } = req.body;
    
        const formData = new FormData();
        formData.append("prompt", prompt);
    
        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", 
            formData , {
            headers: {
                "x-api-key": process.env.CLIPDROP_API,
            },
            responseType: "arraybuffer"
        });
    
        // Now convert the data into base64...
        const base64Image = Buffer.from(data , "binary").toString("base64");
    
        const resImg = `data:image/png;base64,${base64Image}`;
    
        res.json({
            success: true,
            message: "Image Generated",
            resultImage : resImg,
        });
    
      } catch (error) {
        res.json(error.message);
      }
}


//  Function to generate Text ...
const generateText = async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
        const { prompt } = req.body;

        const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ text: prompt }],
        });

        const parts = response.candidates[0].content.parts;
        let imageBase64 = null;
        let textResult = null;

        // Example: returning first text response
        for (const part of parts) {
            if (part.text) {
                textResult = part.text;
            } 
            else if (part.inlineData) {
                imageBase64 = part.inlineData.data; // this is base64
            }
        }

        res.json({ text: textResult, image: imageBase64 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { generateImg , generateText };
