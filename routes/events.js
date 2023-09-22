import express from "express";
import {
  getFabrizo,
  getFixtures,
  getInformation,
  getMadridInsights,
  getNews,
  getPremuireLeaguePrediction,
  getResults,
  getTransfers,
} from "../controllers/events.js";
import cors from "cors";

const app = express();

const router = express.Router();
app.use(cors());

// all routes are staring with users
router.get("/news", getNews);
router.get("/transfers", getTransfers);
router.get("/fixtures", getFixtures);
router.get("/results", getResults);
router.get("/fabrizoinfo", getFabrizo);
router.get("/", getInformation);
router.get("/realmadrid", getMadridInsights);


export default router;
