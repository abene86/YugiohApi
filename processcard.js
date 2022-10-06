const monstercard =require("./monstercard")
const processcard = class processcard{
    constructor(jsonDataSet){
        this.mapOfCardInformations = new Map()
        jsonDataSet.data.forEach(card =>{
            this.mapOfCardInformations.set(card.name, new monstercard(card.name, card.atk, card.def, card.level, card.attribute, card.card_prices))
        })
    }
    getAllCardInformation(){
        return this.mapOfCardInformations;
    }
    getInformationByCardName(cardName){
        if(this.mapOfCardInformations.has(cardName)){
            return this.mapOfCardInformations.get(cardName)
        }else{
            return null;
        }
    }
    findAllCardWithSpecifiedLevel(level){
      let listCardThatMeetLevelRequirment=[];
      if(level >=1 && level <=6){
        this.mapOfCardInformations.forEach(element =>{
            if(element.level === level){
                listCardThatMeetLevelRequirment.push(element);
            }
        });
        }
        return listCardThatMeetLevelRequirment;
    }
    getOnlyCardNames(){
        const arrayOfCardNames =[];
        this.mapOfCardInformations.forEach(element => {
            arrayOfCardNames.push(element.cardName);
        });
        return arrayOfCardNames;
    }
    getMostExpensiveCardPrice(onlineStoreToBuyCards){
        let placesToBuyCards= ["tcgplayer", "ebay", "amazon", "coolstuffinc"];
        let mostExpensiveCard = {card: null, cardPrice: 0}
        let correctPricingName = onlineStoreToBuyCards.concat("_price")
        if(placesToBuyCards.includes(onlineStoreToBuyCards)){
            this.mapOfCardInformations.forEach(card =>{
                if(mostExpensiveCard.card == null || card.card_prices[0][correctPricingName] > mostExpensiveCard.cardPrice){
                    mostExpensiveCard.card = card
                    mostExpensiveCard.cardPrice = card.card_prices[0][correctPricingName];
                }
            });
        }
        return mostExpensiveCard.card;
    }
}
module.exports = processcard;