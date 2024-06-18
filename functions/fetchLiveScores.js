import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import cheerio from "cheerio";
import { teamNames } from "../constants/transfer_keywords.js";  // Adjust the path as needed

const fixturesSource = [
  {
    name: "skysports",
    address: "https://www.skysports.com/football-fixtures",
    base: "",
  },
];

const articles1 = [];
const fixturs = [];

export const fetchLiveScore = async () => {
  for (const source of fixturesSource) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);

      // Iterate through each link with the specified class
      $("a.matches__item.matches__link").each(function () {
        // Extract the scores from the span tags with class matches__teamscores-side
        const teamScoreA = $(this).find("span.matches__teamscores-side").first().text().trim();
        const teamScoreB = $(this).find("span.matches__teamscores-side").last().text().trim();
        
        // Use teamNames to find matching fixtures
        teamNames.forEach((term1) => {
          // Check if the term matches the text within this link
          if ($(this).text().includes(term1)) {
            let title = $(this).text().trim();
            // Clean and format the title text
            title = title.replace(/\n/g, "").replace(/\s+/g, " ").replace(/0 0/, "").replace(/0 0/, "");

            // Extract team names and match URL
            const arr = title.split(/\d+/);
            const arrc = title.split(/:(.{2})\s(.+)/);
            const url = $(this).attr("href");
            const userId = uuidv4();

            if (!fixturs.includes(title)) {
              articles1.push({
                teamA: arr[0].trim(),
                teamB: arrc[2]?.trim(),
                scoreA: teamScoreA,  // Add the extracted score for team A
                scoreB: teamScoreB,  // Add the extracted score for team B
                // url: source.base + url,
                // source: source.name,
                id: userId,
              });
              fixturs.push(title);
            }
          }
        });
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return articles1;
};
