import axios from "axios";
import { fixedTransferWords, transferKeywords } from "../constants/transfer_keywords.js";
import cheerio from "cheerio";
import { v4 as uuidv4 } from "uuid";
const transfer = [];
// Transfer Keywords

const footballTransferNews = [
  {
    name: "mirror",
    address: "https://www.mirror.co.uk/sport/football/transfer-news/",
    base: "",
  },
  {
    name: "skysports",
    address: "https://www.skysports.com/football/transfer-news",
    base: "https://www.skysports.com",
  },
];
const addedHeadlines1 = [];
export const fetchTransfers = async () => {
  for (const source of footballTransferNews) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);
      fixedTransferWords.forEach((term1) => {
        if (source.name === "mirror") {
          $(`article:contains("${term1}")`, html).each(function () {
            const title = $(this).text();
            const anchorTag = $(this).find("a"); // Find the associated anchor tag within the article

            const url = anchorTag.attr("href");
            const userId = uuidv4();
            if (!addedHeadlines1.includes(title)) {
              transfer.push({
                title,
                url: source.base + url,
                source: source.name,
                id: userId,
              });
              addedHeadlines1.push(title);
            }
          });
        } else if (source.name === "skysports") {
          $(`a:contains("${term1}")`, html).each(function () {
            const title = $(this).text().trim();
            // Find the associated anchor tag within the article

            const url = $(this).attr("href");
            if (!addedHeadlines1.includes(title)) {
              transfer.push({
                title,
                url: source.base + url,
                source: source.name,
              });
              addedHeadlines1.push(title);
            }
          });
        }
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return transfer;
};
