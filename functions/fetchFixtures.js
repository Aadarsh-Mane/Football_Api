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

export const fetchFixtures = async () => {
  // Initialize a new list for articles to ensure fresh data on each call
  const articles1 = [];
  const fixturs = new Set(); // Use a Set to avoid duplicates efficiently

  for (const source of fixturesSource) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);

      // Parse the match information inside the specified div
      $("div.fixres.matches-block--large").each(function () {
        const month = $(this).find("h3").text().trim();
        const day = $(this).find("h4").text().trim();
        // Iterate over each match link within the block
        $(this).find("a.matches__item.matches__link").each(function () {
          let title = $(this).text().trim();
          const matchTime = $(this).find("span.matches__date").text().trim();

          // Extract the scores from the span tags with class matches__teamscores-side
          const teamScoreA = $(this).find("span.matches__teamscores-side").first().text().trim() || "0";
          const teamScoreB = $(this).find("span.matches__teamscores-side").last().text().trim() || "0";

          // Extract the match status from the span with class matches__item-col matches__info
          const matchInfo = $(this).find("span.matches__item-col.matches__info").text().trim();

          // Determine if the match is finished based on "FT" in matchInfo
          let matchOver = false;
          let matchStatus = 'Match not started';
          if (matchInfo.includes("FT")) {
            matchOver = true;
            matchStatus = 'Match is already finished';
          }

          // Use teamNames to find matching fixtures
          teamNames.forEach((term1) => {
            if (title.includes(term1)) {
              // Clean and format the title text
              title = title.replace(/\n/g, "").replace(/\s+/g, " ").replace(/0 0/, "").replace(/0 0/, "");

              // Extract team names
              const arr = title.split(/\d+/);
              const arrc = title.split(/:(.{2})\s(.+)/);
              const teamA = arr[0].trim();
              const teamB = arrc[2]?.trim();
              const url = $(this).attr("href");
              const userId = uuidv4();

              const fixtureKey = `${teamA}-${teamB}`;

              // Check if the match is already tracked
              const existingMatchIndex = articles1.findIndex(
                match => match.teamA === teamA && match.teamB === teamB
              );

              if (existingMatchIndex > -1) {
                // Update the score and status for the existing match
                articles1[existingMatchIndex].scoreA = teamScoreA;
                articles1[existingMatchIndex].scoreB = teamScoreB;
                articles1[existingMatchIndex].matchOver = matchOver;
                // articles1[existingMatchIndex].matchStatus = matchStatus;
              } else {
                // Add a new match entry
                articles1.push({
                  teamA: teamA,
                  teamB: teamB,
                  scoreA: teamScoreA,
                  scoreB: teamScoreB,
                  time: matchTime,
                  matchOver: matchOver,
                  month:month,
                  day: day,
                  // matchStatus: matchStatus,
                  // url: source.base + url,
                  // source: source.name,
                  id: userId,
                });
                fixturs.add(fixtureKey); // Track the fixture to avoid duplicates
              }
            }
          });
        });
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return articles1;
};

// Test fetchFixtures function
fetchFixtures().then((articles) => console.log(articles));
