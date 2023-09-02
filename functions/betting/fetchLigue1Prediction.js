import axios from "axios";
import cheerio from "cheerio"
const newspapers=
[

  {
    address:'https://footballwhispers.com/blog/french-ligue-1-betting-tips/',
    base:'',
    source:'',
  }
]
const addedHeadlines1=[]
const articles=[]
export const fetchLigue1Predictions = async() =>{
    for (const source of newspapers) {

        const response = await axios.get(source.address);
              const html = response.data;
              const $ = cheerio.load(html);
        
              // Select h3 elements containing "Prediction"
              const h3Elements = $('span:contains("vs")');
                //  const elements=$(this).find('span').text()
              // Combine h3 and the immediately following two p elements into articles
              h3Elements.each((index, element) => {
                const match = $(element).text();
                const pElements = $(element).nextAll('p').slice(0, 3).map((i, pElement) => $(pElement).text()).get();
        
                if (!addedHeadlines1.includes(match)) {
                  const article = {
                    // elements,
                    match,
                    source: newspapers.name,
                    Prediction: {}, // Use an object instead of an array for custom keys
        
                  };
        
                  // Create an array to store p tags as separate key-value pairs
                  // article.Prediction = [];
                  const pKeys = ['Description', 'Tip', 'Kick-Off'];
        
                  for (let i = 0; i < pElements.length; i++) {
                    article.Prediction[pKeys[i]] = pElements[i];
                  }
        
                  articles.push(article);
                  addedHeadlines1.push(match);
                }
              });
          
           
      
    }
    return articles;
}