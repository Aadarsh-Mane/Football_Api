import axios from "axios";
import cheerio from "cheerio";

const information = [
  `Bellingham's`,
  "Ageless",
  "Vini Jr",
  "no-nonsense",
  "dirty",
  "normalised",
  "Kane's",

  "De Bruyne",
  "drove",
  "goal-scorer",
  "Touted",
  "drove",
  "Black Pearl",
];

const footballinformation = [
  {
    name: "radiotimes",
    address:
      "https://www.radiotimes.com/tv/sport/football/best-football-players-world/",
    base: "",
  },
  {
    name: "sportsadda",
    address:
      "https://www.sportsadda.com/football/features/top-10-football-players-of-all-time",
    base: "",
  },
];
const nameMapping = {
  Bellingham: "Bellingham",
  Messi: "Messi",
  Ronaldo: "Ronaldo",
  Modric: "Modric",
  "Vini Jr": "Vini Jr",
  Lewandowski: "Lewandowski",
  Benzema: "Benzema",
  drove: "Maradona",
  Kane: "Kane",
  Pele: "Pele",
  Kevin: "Kevin De Bruyne",
  Johan: "Johan Cruffy",
};
const wikipidea = [
  "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
  "https://en.wikipedia.org/wiki/Jude_Bellingham",
  "https://en.wikipedia.org/wiki/Karim_Benzema",
  "https://en.wikipedia.org/wiki/Harry_Kane",
  "https://en.wikipedia.org/wiki/Kevin_De_Bruyne",

  "https://en.wikipedia.org/wiki/Pel%C3%A9",
  "https://en.wikipedia.org/wiki/Vin%C3%ADcius_J%C3%BAnior",
  "https://en.wikipedia.org/wiki/Diego_Maradona",
  "https://en.wikipedia.org/wiki/Luka_Modri%C4%87",
  "https://en.wikipedia.org/wiki/Robert_Lewandowski",
  "https://en.wikipedia.org/wiki/Johan_Cruyff",
];
const informative = [];
const addedInformation = [];
export const fetchInformation = async () => {
  for (const source of footballinformation) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);
      information.forEach((term3) => {
        if (source.name === "radiotimes") {
          $(`p:contains("${term3}")`, html).each(function () {
            // Store the anchor tag for better readability
            let desc = $(this).text().trim();
            if (!addedInformation.includes(desc)) {
              // Check if the desc contains any of the keywords
              for (const keyword in nameMapping) {
                if (desc.includes(keyword)) {
                  const matchingName = nameMapping[keyword];

                  const wikiLink = wikipidea.find((link) =>
                    link.includes(matchingName.replace(" ", "_"))
                  );
                  informative.push({
                    player: matchingName,
                    desc,
                    content: source.name,
                    website: wikiLink,
                  });

                  break; // Exit the loop after the first match
                }
              }

              // If no match was found, add the object without the "name" key

              addedInformation.push(desc);
            }
          });
        } else if (source.name === "sportsadda") {
          $(`span:contains("${term3}")`, html).each(function () {
            // Store the anchor tag for better readability
            let desc = $(this).text().trim();
            if (!addedInformation.includes(desc)) {
              // Check if the desc contains any of the keywords
              for (const keyword in nameMapping) {
                if (desc.includes(keyword)) {
                  const matchingName = nameMapping[keyword];
                  const wikiLink = wikipidea.find((link) =>
                    link.includes(matchingName.replace(" ", "_"))
                  );

                  informative.push({
                    desc,
                    content: source.name,
                    player: matchingName,
                    website: wikiLink,
                  });

                  break; // Exit the loop after the first match
                }
              }

              // If no match was found, add the object without the "name" key

              addedInformation.push(desc);
            }
          });
        }
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  return informative;
};
