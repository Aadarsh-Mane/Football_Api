import axios from "axios";
import cheerio from "cheerio"
import { bundesliga_teams } from "../../constants/news_keywords.js";
const newspapers=
[

  {
    address:'https://footballwhispers.com/blog/bundesliga-betting-tips/',
    base:'',
    source:'',
  }
]
const championsLeagueTeams = [
    "Real Madrid",
    "Barcelona",
    "Bayern Munich",
    "Manchester United",
    "Liverpool",
    "AC Milan",
    "Inter Milan",
    "Juventus",
    "Chelsea",
    "Manchester City",
    "Arsenal",
    "Paris Saint-Germain (PSG)",
    "Borussia Dortmund",
    "Atletico Madrid",
    "Tottenham Hotspur",
    "AS Roma",
    "Napoli",
    "Ajax",
    "Porto",
    "Benfica",
    "Valencia",
    "Lyon",
    "Marseille",
    "Monaco",
    "Bayer Leverkusen",
    "Schalke 04",
    "Sevilla",
    "Zenit Saint Petersburg",
    "Celtic",
    "Leeds United",
    "Feyenoord",
    // Add more teams as needed
  ];
  
const addedHeadlines1=[]
const articles=[]
export const fetchBundesligaPredictions = async() =>{
    for (const source of newspapers) {

        const response = await axios.get(source.address);
              const html = response.data;
              const $ = cheerio.load(html);
        
              // Select h3 elements containing "Prediction"
              bundesliga_teams.forEach((term1) => {
              const h3Elements = $(`h3:contains("vs")`);
        
              // Combine h3 and the immediately following two p elements into articles
              h3Elements.each((index, element) => {
                const match = $(element).text();
                const pElements = $(element).next('p').slice(0, 2).map((i, pElement) => $(pElement).text()).get();
        
                if (!addedHeadlines1.includes(match)) {
                  const article = {
                    match,
                    source: newspapers.name,
                    Prediction: {}, // Use an object instead of an array for custom keys
        
                  };
        
                  // Create an array to store p tags as separate key-value pairs
                  // article.Prediction = [];
                  const pKeys = ['Tip'];
        
                  for (let i = 0; i < pElements.length; i++) {
                    article.Prediction[pKeys[i]] = pElements[i];
                  }
        
                  articles.push(article);
                  addedHeadlines1.push(match);
                }
              });
            })
           
      
    }
    return articles;
}