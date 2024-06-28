import { fetchNews } from "../functions/fetchNews.js";
import { fetchTransfers } from "../functions/fetchTransfers.js";
import { fetchFixtures } from "../functions/fetchFixtures.js";
import { fetchResults } from "../functions/fetchResults.js";
import { fetchInformation } from "../functions/informative.js";
import { fetchFabrizo } from "../functions/fetchFabrizioRomaneoInfo.js";
import { fetchPremiureLeaguePredictions } from "../functions/betting/fetchPremiureLeaguePrediction.js";
import { fetchChampionsLeaguePredictions } from "../functions/betting/fetchChampionLeaguePrediction.js";
import { fetchConferenceLeaguePredictions } from "../functions/betting/fetchConferenceLeaguePrediction.js";
import { fetchEurpoaLeaguePredictions } from "../functions/betting/fetchEuropaLeaguePrediction.js";
import { fetchSeriesAPredictions } from "../functions/betting/fetchSeriesAPrediction.js";
import { fetchLigue1Predictions } from "../functions/betting/fetchLigue1Prediction.js";
import { fetchLaLigaPredictions } from "../functions/betting/fetchLaLigaPrediction.js";
import { fetchBundesligaPredictions } from "../functions/betting/fetchBundesligaPrediction.js";
import { fetchMadrid } from "../functions/specificTeams/realMadrid.js";
import { fetchBarca } from "../functions/specificTeams/barcelona.js";
import { fetchLiveScore } from "../functions/fetchLiveScores.js";
import { scrapeTableData } from "../functions/fetchPlayerMarket.js";
import { scrapeFootballMatches } from './../functions/fetchAllFix.js';

export const getNews = async (req, res) => {
  try {
    const articles = await fetchNews();
    res.json(articles);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTransfers = async (req, res) => {
  try {
    const transfers = await fetchTransfers();
    res.json(transfers);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getFixtures = async (req, res) => {
  try {
    const fixtures = await fetchFixtures();
    res.json(fixtures);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getResults = async (req, res) => {
  try {
    const results = await fetchResults();
    res.json(results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getInformation = async (req, res) => {
  try {
    const inform = await fetchInformation();
    res.json(inform);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getFabrizo = async (req, res) => {
  try {
    const fab = await fetchFabrizo();
    res.json(fab);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getPremuireLeaguePrediction = async (req, res) => {
  try {
    const pre = await fetchPremiureLeaguePredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getChampionsLeaguePrediction = async (req, res) => {
  try {
    const pre = await fetchChampionsLeaguePredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getConferenceLeaguePrediction = async (req, res) => {
  try {
    const pre = await fetchConferenceLeaguePredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getEuropaLeaguePrediction = async (req, res) => {
  try {
    const pre = await fetchEurpoaLeaguePredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getSeriesAPrediction = async (req, res) => {
  try {
    const pre = await fetchSeriesAPredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getLigue1Prediction = async (req, res) => {
  try {
    const pre = await fetchLigue1Predictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getLaLigaPrediction = async (req, res) => {
  try {
    const pre = await fetchLaLigaPredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getBundesligaPrediction = async (req, res) => {
  try {
    const pre = await fetchBundesligaPredictions();
    res.json(pre);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getMadridInsights = async (req, res) => {
  try {
    const madrid = await fetchMadrid();
    res.json(madrid);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getBarcaInsights = async (req, res) => {
  try {
    const barca = await fetchBarca();
    res.json(barca);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getLiveScore = async (req, res) => {
  try {
    const livescore = await fetchLiveScore();
    res.json(livescore);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const getPLayerRank = async (req, res) => {
  try {
    const livescore = await scrapeTableData();
    res.json(livescore);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
export const  getAllMatches= async (req, res) => {
  try {
    const livescore1 = await scrapeFootballMatches();
    res.json(livescore1);
  } catch (error) {
    console.error("Error:", error);
    res.json(500).json({ error: "Internal server error" });
  }
};
