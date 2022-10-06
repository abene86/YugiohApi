const monstercard =require("./monstercard")

const processcard = class processcard{
    constructor(jsonDataSet){
        this.mapOfCardInformations = new Map()
        jsonDataSet.data.forEach(card =>{
            this.mapOfCardInformations.set(card.name, new monstercard(card.name, card.atk, card.def, card.level, card.attribute, card.card_prices))
        })
    }
    //What is the point of this method?
    //As someone who loves the anime and cards,
    //It would help if any wants to see all cards
    //It could also serve further utility in future projects because each card has an array of images and 
    // more meta data which I kept out for the simiplicity and project restriction
    getAllCardInformation(){
        const allCards =[];
        this.mapOfCardInformations.forEach(card =>{
            allCards.push(card);
        });
        return allCards
    }
    getInformationByCardName(cardName){
        if(this.doesTheCardExistInCache(cardName)){
            return this.mapOfCardInformations.get(cardName)
        }else{
            return null;
        }
    }
    doesTheCardExistInCache(cardName){
        return this.mapOfCardInformations.has(cardName)
    }
    findAllCardWithSpecifiedLevel(level){
      const listCardThatMeetLevelRequirment=[];
      if(this.isCardLevelAppropriate(level)){
        this.mapOfCardInformations.forEach(element =>{
            if(element.level === level){
                listCardThatMeetLevelRequirment.push(element);
            }
        });
        }
        return listCardThatMeetLevelRequirment;
    }
    isCardLevelAppropriate(level){
       return level >=0 && level <=12
    }
    getOnlyCardNames(){
        const arrayOfCardNames =[];
        this.mapOfCardInformations.forEach(element => {
            arrayOfCardNames.push(element.cardName);
        });
        return arrayOfCardNames;
    }
    getMostExpensiveCardPrice(onlineStoreToBuyCards){
        let mostExpensiveCard = {card: null, cardPrice: 0}
        let correctPricingName = onlineStoreToBuyCards.concat("_price")
        if(this.isItAnAppopriateStore(onlineStoreToBuyCards)){
            this.mapOfCardInformations.forEach(card =>{
                if(mostExpensiveCard.card == null || card.card_prices[0][correctPricingName] > mostExpensiveCard.cardPrice){
                    mostExpensiveCard.card = card
                    mostExpensiveCard.cardPrice = card.card_prices[0][correctPricingName];
                }
            });
        }
        return mostExpensiveCard.card;
    }
    isItAnAppopriateStore(onlineStoreToBuyCards){
        const placesToBuyCards= ["tcgplayer", "ebay", "amazon", "coolstuffinc"];
        return placesToBuyCards.includes(onlineStoreToBuyCards);
    }
    postUserCreatedCardIntoCache(monsterCard){
        this.mapOfCardInformations.set(monsterCard.cardName, monsterCard)
    }
}
module.exports = processcard;