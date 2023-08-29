import { teamNames } from "../constants/transfer_keywords.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import cheerio from "cheerio";

const fixturesSource = [
  {
    name: "skysports",
    address: "https://www.skysports.com/football-fixtures",
    base: "",
  },
];
const articles1 = [];
const fixturs = [];
export const fetchFixtures = async () => {
  for (const source of fixturesSource) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);
      teamNames.forEach((term1) => {
        $(`a.matches__item.matches__link:contains("${term1}")`, html).each(
          function () {
            let title = $(this).text().trim();
            // title = title.replace(/\b0+\b/g, '');

            // Remove newline characters
            title = title.replace(/\n/g, "");
            title = title.replace(/\s+/g, " ");
            title = title.replace(/0 0/, "").replace(/0 0/, "");
            const arr = title.split(/\d+/);

            // Split the string using space as the delimiter
            const arr1 = title.split(" ");
            const timePattern = /\d{2}:\d{2}/;
            const timeArray = arr1.find((item) => timePattern.test(item));
            const arrc = title.split(/:(.{2})\s(.+)/);

            const url = $(this).attr("href");
            const userId = uuidv4();

            if (!fixturs.includes(title)) {
              articles1.push({
                teamA: arr[0],
                teamB: arrc[2],
                time: timeArray,
                url: source.base + url,
                source: source.name,
                id: userId,
              });
              fixturs.push(title);
            }
          }
        );
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return articles1;
};
