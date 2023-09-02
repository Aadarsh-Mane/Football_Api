import cors from "cors";
import express from "express";
import { getBundesligaPrediction, getChampionsLeaguePrediction, getConferenceLeaguePrediction, getEuropaLeaguePrediction, getLaLigaPrediction, getLigue1Prediction, getPremuireLeaguePrediction, getSeriesAPrediction } from "../controllers/events.js";
const app = express();

const router = express.Router();
app.use(cors());
router.get("/premuire-league", getPremuireLeaguePrediction);
router.get("/champions-league", getChampionsLeaguePrediction);
router.get("/bundesliga", getBundesligaPrediction);
router.get("/laliga", getLaLigaPrediction);
router.get("/conference-league", getConferenceLeaguePrediction);
router.get("/ligue1", getLigue1Prediction);
router.get("/europa", getEuropaLeaguePrediction);
router.get("/seriesA", getSeriesAPrediction);


export default router