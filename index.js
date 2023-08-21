const PORT = process.env.PORT || 5000;

import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import eventRoutes from "./routes/events.js";

import { teamNames, transferKeywords } from "./constants/transfer_keywords.js";
import { matches } from "./constants/results_keywords.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
console.log("hello");

app.use("/players", eventRoutes);
app.get("/", (req, res) => {
  res.json("welcome to  football api");
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
