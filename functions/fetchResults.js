import axios from "axios";
import cheerio from "cheerio";
import {v4 as uuidv4} from 'uuid'

import { matches } from "../constants/results_keywords.js";

const footballResults = [
    {
      name: "skysports",
      address: "https://www.skysports.com/football-results",
      base: "",
    },
  ];
  
  const results = [];
  const addedResults = [];
  export const fetchResults=async()=>{
    for (const source of footballResults) {
        try {
   const response =await axios.get(source.address)
      const html = response.data;
      const $ = cheerio.load(html);
      matches.forEach((term3) => {
        $(`a.matches__item.matches__link:contains("${term3}")`, html).each(
          function () {
            const anchorTag = $(this); // Store the anchor tag for better readability
            let title = anchorTag.text().trim();
            title = title.replace(/\n/g, "");
  
            const parts = title.split(
              /\s+(\d+)\s+(\d+)\s+(\d+:\d+)\s+(.+?)\s+FT/
            );
  
            const scoreArray = parts[1] ? parts[1].trim().split(/\s+/) : []; // Split the score values
            const score = scoreArray.length > 0 ? scoreArray.join("-") : "";
            const userId=uuidv4()
            if (!addedResults.includes(title)) {
              results.push({
                team1: parts[0].trim(),
                result: score + "-" + parts[2],
                team2: parts[3],
                team2: parts[4],
                // spanText,
                // url: source.base + url,
                source: source.name,
                id:userId,
              });
              addedResults.push(title);
            }
          }
        );
      });
        }catch (error) {
            console.error(`Error fetching from ${source.name}:`, error);
          }
          }
          return results
        }
  