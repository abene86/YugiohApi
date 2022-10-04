const express = require('express')
const fetch = require('node-fetch')
const monstercard = require('./monstercard')
const app = express()
const port = 3000
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon';
let arrayDragoncards =[]
makeSureListPopulated()
console.log(arrayDragoncards)

async function getDataForDragonCardsInYugioh(url){
    let response = await fetch(url);
    let jsonObjectsCards = await response.json();
    let dataOFCards = await jsonObjectsCards;
    dataOFCards.data.forEach(entry =>{
        arrayDragoncards.push(new monstercard(entry.name, entry.atk, entry.def, entry.attribute, entry.card_prices))
   });
}
function makeSureListPopulated(){
  getDataForDragonCardsInYugioh(url)
   while (arrayDragoncards.length === 0){
        if(arrayDragoncards.length !== 0){
           console.log("cachec is populated")
           break;
        }
   }
}

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