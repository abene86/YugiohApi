const express = require('express');
const fetch = require('node-fetch');
const monstercard = require('./monstercard');
const app = express();
const port = 3000;
const processcard = require('./processcard');
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?race=dragon';
let cardJson;
getDataFromYugiohApi(url)
let cardProcesser;

async function getDataFromYugiohApi(url){
  try{
    let responseApi = await fetch(url)
    let jsonDataSet = await responseApi.json()
    let dataOfCards = await jsonDataSet
    cardJson = dataOfCards
    cardProcesser= new processcard(cardJson);
  }catch(error){
    console.log(error)
  }
}

app.get('/', (req, res) => {
    res.json(cardProcesser.getAllCardInformation())  
});

app.get('/mostexpensivecardprice/:onlineStoreName', (req, res) => {
  if(!cardProcesser.isItAnAppopriateStore(req.params.onlineStoreName)){
      return res.status(400).send("Bad request the online store provided does not exist")
  }
  return res.json(cardProcesser.getMostExpensiveCardPrice(req.params.onlineStoreName))
})

app.get('/allCardNames', (req, res) => {
  return res.json(cardProcesser.getOnlyCardNames())
})
app.get('/findAllCardWithGivenLevel/:level', (req, res) => {
  if(!cardProcesser.isCardLevelAppropriate(req.params.level)){
      return res.status(400).send("Bad request currenlty only cards from level 0 to 12 exist")
  }
  return res.json(cardProcesser.findAllCardWithSpecifiedLevel(parseInt(req.params.level)))
})

app.get('/cardinformation/:nameCard', (req, res) => {
  if(!cardProcesser.doesTheCardExistInCache(req.params.nameCard)){
    return res.status(400).send("Bad request name with card does not exist")
  }
  return res.json(cardProcesser.getInformationByCardName(req.params.nameCard))
})

app.post('/addnewcardinformation/cardname/:nameCard/cardlevel/:level/atk/:atk/def/:def/attribute/:attribute', (req, res) => {
  newMonsterCard = new monstercard(req.params.nameCard, req.params.atk, req.params.def, req.params.level, req.params.attribute)
  cardProcesser.postUserCreatedCardIntoCache(newMonsterCard)
  return res.send(cardProcesser.getInformationByCardName(req.params.nameCard));
})
app.post('/changeCardName/cardname/:originialnameCard/newcardname/:newCardName/', (req, res) => {
  if(!cardProcesser.doesTheCardExistInCache(req.params.originialnameCard)){
    return res.status(400).send("Bad request name with card does not exist")
  }
  cardProcesser.updateCardNameFromCache(req.params.originialnameCard, req.params.newCardName)
  return res.send(cardProcesser.getInformationByCardName(req.params.newCardName));
})

module.exports = app;