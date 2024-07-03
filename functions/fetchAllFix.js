import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.theguardian.com/football/fixtures"; // Replace with your URL containing the football matches

export const scrapeFootballMatches = async () => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const matches = [];

    // Iterate over each day container
    $("div.football-matches__day").each(function () {
      const dayContainer = $(this);
      const matchDate = dayContainer.find("div.date-divider").text().trim();

      // Iterate over each match table within the day container
      dayContainer.find("table").each(function () {
        const matchTable = $(this);

        // Iterate over rows in the table
        matchTable.find("tbody tr").each(function () {
          const matchRow = $(this);
          const columns = matchRow.find("td");

          // Extract data from columns (adjust based on actual table structure)
          const matchStatus = columns.eq(0).text().trim(); // Match status or time
          const matchDetails = columns.eq(1).text().trim(); // Match details
          const matchDetails1 = columns.eq(2).text().trim(); // Match details

          // Split matchDetails1 by '\n' and clean up extra spaces
          const teams = matchDetails1.split('\n').map(team => team.trim()).filter(Boolean);
          const teamA = teams[0];
          const teamB = teams[1];

          // Extract additional information from the match row, such as team crests or URLs
          const matchLink = matchRow.attr("data-link-to"); // Example of getting a URL link

          // Create an object for each match and push it to the matches array
          matches.push({
            teamA,
            teamB,
            date: matchDate,
            time: matchStatus,
            
          });
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
// scrapeFootballMatches().then(matches => console.log(matches));
