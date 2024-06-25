import axios from "axios";
import cheerio from "cheerio";
import { v4 as uuidv4 } from "uuid";

const footballNews = [
  {
    name: "transfermarkt",
    address: "https://www.transfermarkt.co.in/spieler-statistik/wertvollstespieler/marktwertetop",
    base: "",
  }
];

export const scrapeTableData = async () => {
  const articles = [];

  for (const source of footballNews) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);

      // Select the table - you might need to adjust the selector based on the specific table's class or ID
      const table = $("table.items");

      // Iterate over each row (excluding the header row if needed)
      table.find("tbody > tr").each((index, element) => {
        const columns = $(element).find("td");
        
        // Check if row has the expected number of columns
        if (columns.length >= 5) {
          // Extract data from each column
          const rank = $(columns[0]).text().trim();
          const nation = $(columns[3]).find('img').first().attr('title');
          const playerName = $(columns[1]).find("a").text(); // Adjust this selector if player name is inside a link
          const age = $(columns[2]).text().trim();
          const nationality = $(columns[3]).find("img").attr("alt"); // Adjust to extract nationality, assuming it's an image alt text
          const marketValue = $(columns[4]).text().trim();

          // Add extracted data to the articles array
          articles.push({
            id: uuidv4(),
            rank,
            playerName,
            age,
            nationality,
            marketValue,
            nation
          });
        }
      });

    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }

  return articles;
};

scrapeTableData().then((data) => {
  console.log(data);
}).catch((error) => {
  console.error("Error scraping table data:", error);
});
