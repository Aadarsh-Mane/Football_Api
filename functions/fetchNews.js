import axios from "axios";
import cheerio from "cheerio";
import { allKeywords } from "../constants/news_keywords.js";

const footballNews = [
  {
    name: "skysports",
    address: "https://www.skysports.com/football/news",
    base: "",
  },
  {
    name: "hindustantimes",
    address: "https://www.hindustantimes.com/sports/football",
    base: "https://www.hindustantimes.com",
  },
];

const articles = [];
const addedHeadlines = [];
export const fetchNews = async () => {
  for (const source of footballNews) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);

      allKeywords.forEach((term) => {
        if (source.name === "skysports") {
          $(`a.news-list__headline-link:contains("${term}")`).each(function () {
            const headLine = $(this).text().trim();
            const url = $(this).attr("href");
            if (!addedHeadlines.includes(headLine)) {
              articles.push({
                headLine,
                url: source.base + url,
                source: source.name,
              });
              addedHeadlines.push(headLine);
            }
          });
        } else if (source.name === "hindustantimes") {
          $(`a:contains("${term}")`).each(function () {
            const headLine = $(this).text().trim();
            const url = $(this).attr("href");
            if (!addedHeadlines.includes(headLine)) {
              articles.push({
                headLine,
                url: source.base + url,
                source: source.name,
              });
              addedHeadlines.push(headLine);
            }
          });
        }
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return articles;
};
