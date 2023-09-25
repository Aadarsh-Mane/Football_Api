const PORT = process.env.PORT || 5000;
import axios from "axios";
import cheerio from "cheerio";

import express from "express";
import eventRoutes from "./routes/events.js";
import bettingroutes from "./routes/bettingevents.js";

const app = express();
app.use("/players", eventRoutes);
app.use("/betting", bettingroutes);

app.get("/", (req, res) => {
  res.json("welcome to  Football API ");
});

// checking port on local server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
