import { fetchNews } from "../functions/fetchNews.js";
import { fetchTransfers } from "../functions/fetchTransfers.js";
import { fetchFixtures } from "../functions/fetchFixtures.js";
import { fetchResults } from "../functions/fetchResults.js";
import { fetchInformation } from "../functions/informative.js";
import { fetchFabrizo } from "../functions/fetchFabrizioRomaneoInfo.js";
``;
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
