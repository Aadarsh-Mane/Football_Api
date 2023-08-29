const PORT = process.env.PORT || 5000;

import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import eventRoutes from "./routes/events.js";


const app = express();

const newspapers = [
  {
    name: "market",
    address: "https://www.transfermarkt.co.in/premier-league/marktwerte/wettbewerb/GB1",
  
    base: ""
  },
];
app.use("/players", eventRoutes);
app.get("/", (req, res) => {
  res.json("welcome to  football api dRAG");
});
const addedHeadlines1=[]

const articles = []
const playerNames = [
  "Erling Haaland",
  "Bukayo Saka",
  "Phil Foden",
  "Rodri",
  "Declan Rice",
  "Martin Ødegaard",
  "Rúben Dias",
  "Marcus Rashford",
  "Enzo Fernández",
  "Christopher Nkunku",
  "Gabriel Martinelli",
  "Bernardo Silva",
  "Josko Gvardiol",
  "Jack Grealish",
  "Gabriel Jesus",
  "Moisés Caicedo",
  "Bruno Fernandes",
  "Luis Díaz",
  "Bruno Guimarães",
  "Alexander Isak",
  "Kevin De Bruyne",
  "Mohamed Salah",
  "Alexis Mac Allister",
  "William Saliba",
  "Darwin Núñez",
  "Anthony",
  "Reece James"
];

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            playerNames.forEach((term3) => {

            $(`tr:contains("${term3}")`, html).each(function () {
              const $tr = $(this);

              // Find the nested <td> with the table
              const $tdWithTable = $tr.find('td:has(table)');
              const td = $tr.find('td').text()
              const title = td.split("\n").join("");
              const parts1 = title.split(/(\d+)\s+/);

              const parts = title.split(/(\d+)₹/);


              // Find the value you want from the table
              const tableValue = $tdWithTable.find('table').text();

              // Find the value you want from the anchor tag
              const anchorValue = $tr.find('td a').text();
              if (!addedHeadlines1.includes(title)) {

              articles.push({
                  // tableValue,
                  //  anchorValue,
                  rank:parts1[0],
                  playerNames:parts1[1],
                  title,
                  sss:parts[0],
                  age:parts[1],
                  source: newspaper.name
              });
              addedHeadlines1.push(title)
              }
            })
          })
        })
      
})



app.get('/newsss', (req, res) => {
    res.json(articles)
})
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
