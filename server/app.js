
require('@dotenvx/dotenvx').config();
const express = require("express");
const cors = require("cors");

const appRouter = require("./routes/router.js");

const app = express();
const PORT = process.env.PORT || 8080;


// _____ Middlewares

app.use(cors({
    origin: process.env.FRONT_URL || "*",
    methods: ["GET" , "POST" , "DELETE"],
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ___ Routes ...

app.use("/api", appRouter );
app.get('/health', (req, res) => res.send('OK'));


//  server function ...

app.listen(PORT , () => {
    console.log("server start on port : ", PORT );
});
