const express = require('express');
require('dotenv').config();
const app = express();
const router = express.Router();
const axios = require('axios');
const Request = require('request');

const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const routes = require('./routes');
const { Router } = require('express');
app.use(express.json());
app.use('/', routes);

//test


var key = process.env.API_KEY
var date = "2020-11-07";
var searchItem = "bitcoin";

const api_url = `http://newsapi.org/v2/everything?q=${searchItem}&from=${date}&sortBy=publishedAt&apiKey=${key}`

//test
app.get("/gateway", (req, res) => {
  console.log("hello gateway");
  res.send();
})

//test
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

//get req
// Request.get("https://jsonplaceholder.typicode.com/posts", (error, response, body) => {
//   if(error){
//     return console.dir(error);
//   }
//   console.dir(JSON.parse(body));
// })

//post req
Request.post({
  "headers": { "content-type": "application/json"},
  "url": "https://jsonplaceholder.typicode.com/posts",
  "body": JSON.stringify({
    "firstname": "marcus",
    "lastname": "galvin"
  })}, (error, response, body) => {
    if(error){
      return console.dir(error);
    }
    console.dir(JSON.parse(body));
  })





//news post req
// app.post("/", async (req, res) => {
//   const data = req.body;
//       try {
//         res.send(getHeadlines());
//         // console.log(data)
//       } catch (err){
//         res.status(500).json({message: error.message});
//       }
      
  
// })



app.listen(PORT, () => {
  console.log("Gateway started on port " + PORT);
})