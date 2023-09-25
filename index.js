const PORT = process.env.PORT || 5000;
import axios from "axios";
import cheerio from "cheerio";

import express from "express";
import eventRoutes from "./routes/events.js";
import bettingroutes from "./routes/bettingevents.js";

const app = express();
app.use("/players", eventRoutes);
app.use("/betting", bettingroutes);
const newspapers = [
  {
    name: 'economictimes',
      address: 'https://economictimes.indiatimes.com/topic/wool-industry/news',
      base: 'https://economictimes.indiatimes.com/topic/wool-industry/news'
  },
  {
    name: 'fibre2fashion',
    address: 'https://www.fibre2fashion.com/news/yarn-news',
    base: ''
  },
  
]
const woolTerms=[
  'wool',
  'yarn'
]
const articles = []
const duplicatearticles = []

newspapers.forEach(newspaper => {
  axios.get(newspaper.address)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    woolTerms.forEach((term1) => {
      $(`a:contains(${term1})`, html).each(function () {
        
        const anchor = $(this);
        const headLine = anchor.text();
        const url = anchor.attr('href');
        const desc = anchor.next('td').text();
         
         
        if(!duplicatearticles.includes(headLine)){
          
           articles.push({
             headLine,
            
             source: newspaper.name,
             url: newspaper.base + url,
            })
            duplicatearticles.push(headLine) 
          }
        })
      })
    })
  })
  app.get("/wool", (req, res) => {
    res.json(articles)
  });
app.get("/", (req, res) => {
  res.json("welcome to  Football API ");
});

// checking port on local server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
