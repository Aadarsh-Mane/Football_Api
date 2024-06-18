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

export const fetchFixtures = async () => {
  for (const source of fixturesSource) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);

      // Parse the match information inside the specified div
      $("div.fixres.matches-block--large").each(function () {
        // For each match block, find the h4 or h5 tags containing time information
        const timeTag = $(this).find("h4").text().trim();
        
        // Use teamNames to find matching fixtures
        teamNames.forEach((term1) => {
          $(`a.matches__item.matches__link:contains("${term1}")`, this).each(function () {
            let title = $(this).text().trim();
            const matchTime = $(this).find("span.matches__date").text().trim();

            // Clean and format the title text
            title = title.replace(/\n/g, "").replace(/\s+/g, " ").replace(/0 0/, "").replace(/0 0/, "");
            
            // Extract team names and match URL
            const arr = title.split(/\d+/);
            const arrc = title.split(/:(.{2})\s(.+)/);
            const url = $(this).attr("href");
            const userId = uuidv4();
            let matchOver=false;
            let matchStatus='';
            if(title.includes("FT")){
               matchOver=true;
               matchStatus='Match is already finished'
            }else{
              matchOver=false;
              matchStatus='Match not started'
            }

            if (!fixturs.includes(title)) {
              articles1.push({
                teamA: arr[0],
                teamB: arrc[2],
                time: timeTag, 
                matchOver: matchOver,  // Indicate if the match is over
               matchStatus: matchStatus,
                // Add the extracted time here
                // url: source.base + url,
                // source: source.name,
                id: userId,
              });
              fixturs.push(title);
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
