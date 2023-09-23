import axios from "axios";
import cheerio from "cheerio";
const newspapers = [
  {
    name: "barcaUniversal",
    address: "https://barcauniversal.com/barca-news/",
    base: "",
  },
];
const woolTerms = ["Barcelona", "Barca"];
const articles = [];
const duplicatearticles = [];
export const fetchBarca = async () => {
  for (const source of newspapers) {
    try {
      const response = await axios.get(source.address);
      const html = response.data;
      const $ = cheerio.load(html);
      woolTerms.forEach((term1) => {
        $(`a:contains(${term1})`, html).each(function () {
          const headLine = $(this).text();
          const url = $(this).attr("href");
          const desc = $(this).find("h2").text(); // Find the associated anchor tag within the article

          if (!duplicatearticles.includes(headLine)) {
            articles.push({
              headLine,
                
              url: source.base + url,
              source: source.name,
            });
            duplicatearticles.push(headLine);
          }
        });
      });
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }

  return articles;
};
