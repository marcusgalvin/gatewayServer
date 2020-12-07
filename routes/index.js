const express = require('express')
const router = express.Router()
const app = express();
const bodyParser = require('body-parser');

const axios = require('axios');

//test post req
// app.post("/", function(req, res, next){
//   res.send({
//     type: 'POST',
//     name: req.body.name,
//     password: req.body.rank
//   });
//   console.log(req.body);
// })

// router.get('/', function(req, res, next) {
//   request({
//     uri: 'http://newsapi.org/v2/everything?q=${searchItem}&from=${date}&sortBy=publishedAt&apiKey=${key}',
//     qs: {
//       api_key: '123456',
//       searchItem: 'bitcoin'
//     },
//     function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//         console.log(body)
//       }
//     }
//   });
// });

// app.get("/gateway", (req, res, next) =>{
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((err) =>{
//     console.log(err);
//   });
//   res.render("posts");
// })










module.exports = router;