const processesmonstercard = class processesmonstercard{
    mapOfCardInformations
    constructor(mapOfCardInformations){
        this.mapOfCardInformations = mapOfCardInformations;
    }
    getAllCardInformation(){
        return this.mapOfCardInformations
    }
    getInformationByCardName(cardName){
        if(this.mapOfCardInformations.has(cardName)){
            return this.mapOfCardInformations[cardName]
        }else{
            return null
        }
    }
    findAllCardWithSpecifiedLevel(level){
      if(level >=1 && level <=6)
        return this.mapOfCardInformations.filter(card =>{
            return card.level === level
            });
      else
            return null
    }
    getOnlyCardNames(){
        const arrayOfCardNames =[]
        mapOfCardInformations.forEach(element => {
            arrayOfCardNames.push(element.cardName)
        });
        return arrayOfCardNames
    }
}

module.exports = processesmonstercard;