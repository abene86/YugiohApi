const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon';

async function getDataForDragonCardsInYugioh(url){
    let response = await fetch(url);
    let jsonObjectsCards = await response.json();
    let dataOFCards = await jsonObjectsCards;
    return dataOFCards;
}

let dataOfCards = getDataForDragonCardsInYugioh(url);
let data;
dataOfCards.then( result =>{
    data = result;
});
console.log(data)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cities', (req, res) => {
  return res.json(cities)
})

app.get('/populations', (req, res) => {
  return res.json(populations)
})

module.exports = app;