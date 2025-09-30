
const express = require("express");
const { generateImg , generateText } = require("../controllers/imageController.js");

const router = express.Router();

router.post("/generate", generateImg);
router.post("/chat", generateText);

module.exports = router;
