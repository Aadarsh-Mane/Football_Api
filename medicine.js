const PORT = process.env.PORT || 5000;
import axios from "axios";
import cheerio from "cheerio";

import express from "express";
import eventRoutes from "./routes/events.js";
import bettingroutes from "./routes/bettingevents.js";

const app = express();
// app.use("/players", eventRoutes);
// app.use("/betting", bettingroutes);

// app.get("/", (req, res) => {
//   res.json("welcome to  Football API ");
// });
const pharmeasy = [
  {
      name: 'cityam',
      address: 'https://pharmeasy.in/online-medicine-order/',
      base: ''
  },
  
]

const articles = []; 
const articles1 = []; 
let description = ''; // Variable to store the description

// pharmeasy.forEach(newspaper => {
//   axios.get(newspaper.address)
//       .then(response => {
//           const html = response.data;
//           const $ = cheerio.load(html);
//           description = $('div.MedicalDescription_root__0RzqO').text().trim();

//           $('div.DescriptionTable_descriptionTableContainer__YLlE4 table').each(function () {
//               const table = $(this);
//               const rows = table.find('tr');

//               // Extract values from each row of the table
//               rows.each(function () {
//                   const columns = $(this).find('td');
//                   const rowData = columns.map(function () {
//                       return $(this).text().trim();
//                   }).get();

//                   // Assuming the first column contains the title and the second column contains the content
//                   const title = rowData[0];
//                   const content = rowData[1];
//                   const description = $('div.MedicalDescription_root__0RzqO').text().trim();


//                   articles.push({
//                       title,
//                       content,
//                       source: newspaper.name,
//                   });

//               });
//           });
//       })
//       .catch(error => {
//           console.error('Error fetching data:', error);
//       });
// });
app.get('/', (req, res) => {
  res.json('Welcome to my medi  API')
})

app.get('/pharma/:medicine', async (req, res) => {
  const medicine = req.params.medicine;
  const articles = [];
  let description = '';

  try {
      for (const newspaper of pharmeasy) {
          const response = await axios.get(newspaper.address + medicine);
          const html = response.data;
          const $ = cheerio.load(html);

          description = $('div.MedicalDescription_root__0RzqO').text().trim();

          $('div.DescriptionTable_descriptionTableContainer__YLlE4 table').each(function () {
              const table = $(this);
              const rows = table.find('tr');

              rows.each(function () {
                  const columns = $(this).find('td');
                  const rowData = columns.map(function () {
                      return $(this).text().trim();
                  }).get();

                  const title = rowData[0];
                  const content = rowData[1];

                  articles.push({
                      title,
                      content,
                      source: newspaper.name,
                  });
              });
          });
      }

      res.json({ articles, description });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/allMedicines', async (req, res) => {
  const anchorTexts = [];
  const baseUrl = 'https://pharmeasy.in/online-medicine-order/browse';
  const alphabet = req.query.alphabet || 'a'; 
  const page = req.query.page || 0; 

  try {
      const url = `${baseUrl}?alphabet=${alphabet}&page=${page}`;
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      $('a.BrowseList_medicine__cQZkc').each(function () {
          const anchorText = $(this).text().trim();
          anchorTexts.push(anchorText);
      });

      res.json({ anchorTexts });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
