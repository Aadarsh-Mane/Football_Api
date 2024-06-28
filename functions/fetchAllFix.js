import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.theguardian.com/football/fixtures"; // Replace with your URL containing the football matches

export const scrapeFootballMatches = async () => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const matches = [];

    // Select the div containing football matches and iterate over each table
    $("div.football-matches__container").find("table").each(function () {
      const matchTable = $(this);

      // Iterate over rows in the table skipping header row if needed
      matchTable.find("tbody tr").each(function () {
        const matchRow = $(this);
        const columns = matchRow.find("td");

        // Extract data from columns as needed (example assumes specific structure)
        const teamA = columns.eq(0).text().trim();
        const teamB = columns.eq(1).text().trim();
        const scoreA = columns.eq(2).text().trim();
        const scoreB = columns.eq(3).text().trim();
        const matchTime = columns.eq(4).text().trim();
        const matchStatus = columns.eq(5).text().trim(); // Example: FT, HT, etc.

        // Create an object for each match and push it to the matches array
        matches.push({
          teamA: teamA,
          teamB: teamB,
          scoreA: scoreA,
          scoreB: scoreB,
          time: matchTime,
          status: matchStatus,
        });
      });
    });

    return matches;
  } catch (error) {
    console.error("Error scraping football matches:", error);
    return []; // Return an empty array or handle error as needed
  }
};

// Test scrapeFootballMatches function
