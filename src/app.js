const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const corsOptions = { credentials: true, origin: process.env.URL || "*" };

const app = express();

// Configuring dotenv
dotenv.config();

const customLogger = (message) => (req, res, next) => {
  console.log(`Hello from ${message}`);
  next();
};

// Middleware Configuration for parse request body and cookies
app.use(express.json());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

app.use(customLogger("FarmPouchLogger"));


app.get("/ping",(req,res)=>{
  res.status(200).json({
    "message": "Welcome from my app"
  });
})

module.exports = app;
