import express from "express";
import {
  getFixtures,
  getInformation,
  getNews,
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
router.get("/", getInformation);

export default router;
