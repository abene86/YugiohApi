const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const processcard = require('./processcard');
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon';
let cardJson;

fetch(url).then(response =>{
  return response.json()
}).then( data => {
  cardJson=data
})

 
app.get('/', (req, res) => {
  let cardProcesser = new processcard(cardJson)
    res.json(cardProcesser.getAllCardInformation())  
});

app.get('/mostexpensivecardprice/:onlineStoreName', (req, res) => {
  let cardProcesser = new processcard(cardJson)
  return res.json(cardProcesser.getMostExpensiveCardPrice(req.params.onlineStoreName))
})

app.get('/allCardNames', (req, res) => {
  let cardProcesser = new processcard(cardJson)
  return res.json(cardProcesser.getOnlyCardNames())
})

app.get('/findAllCardWithGivenLevel/:level', (req, res) => {
  let cardProcesser = new processcard(cardJson)
  return res.json(cardProcesser.findAllCardWithSpecifiedLevel(parseInt(req.params.level)))
})
app.get('/cardinformation/:nameCard', (req, res) => {
  let cardProcesser = new processcard(cardJson)
  return res.json(cardProcesser.getInformationByCardName(req.params.nameCard))
})

module.exports = app;