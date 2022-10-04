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
    getMostExpensiveCardPrice(fromWhichStore){
        let placesToBuyCards= ["tcgplayer", "ebay", "amazon", "coolstuffinc"];
        let mostExpensiveCard = null;
        let temp={}
        if(placesToBuyCards.includes(fromWhichStore)){
            this.mapOfCardInformations.forEach(value =>{
                value.card_prices[fromWhichStore]

            });
        }
        return mostExpensiveCard;

    }
}
module.exports = processcard;