const request = require("supertest");

const app = require("./app");
const monstercard = require("./monstercard");
const processesmonstercard = require("./processesMonsterCard");
// const cardJson = require("./sampleDataSetsForTesting")
// let  mapOfCardInformations = createASampleMapCardFortest()
// let monstercardProcessor = setUpForTestinProcessorClass()

// function setUpForTestinProcessorClass(){
//     let mapOfCardInformations_ = mapOfCardInformations
//     let monstercardProcessor_ = new processesmonstercard(mapOfCardInformations_)
//     console.log(mapOfCardInformations_)
//     return monstercardProcessor_
// }
// function createASampleMapCardFortest(){
//     const mapOfCardInformations_ = new Map();
//     const monsterCards = json.parse(cardJson)
//     monsterCards.data.forEach(card =>{
//       mapOfCardInformations_[card.name]= new monstercard(card.name, card.atk, card.def, card.level, card.attribute, card_prices)
//     })
//     return mapOfCardInformations
// }

//describe("Get all card information Using processesMonsterCard", ()=>{
  // test("It should return a map of all the monstercards", () =>{
  //   expect(2).toEqual(2)
  // });
//});

// describe("Get card information Using processesMonsterCard by name", ()=>{
//   test("It should return a monster object with the name of the monstercards", () =>{
//     expect(monstercardProcessor.getInformationByCardName("Ancient Brain")).toEqual(mapOfCardInformations["Ancient Brain"]);
//   });
// });

// describe("Get monster card information using processesMonsterCard by name", ()=>{
//   test("It should return a null value if the card with given name does not exist in map", () =>{
//     expect(monstercardProcessor.getInformationByCardName("Abenezer the wise")).toEqual(null)
//   });
// });

// describe("Get all the monster cards with given level", ()=>{
//   test("It should return an array of all the monstercards with given level", () =>{
//     expect(monstercardProcessor.findAllCardWithSpecifiedLevel(4)).toEqual([mapOfCardInformations["7 Colored Fish"]]);
//   });
// });

const isInteger = require("./isInteger");

describe("isInteger", () => {
    const integerNumbers = [-10, -1, 0, 1, 10];

    test.each(integerNumbers)(
        "passes for integer value %j",
        (fixture) => expect(isInteger(fixture)).toBe(true)
    );

    const floatNumbers = [-10.1, -1.1, 0.1, 1.1, 10.1];

    test.each(floatNumbers)(
        "fails for non-integer value %j",
        (fixture) => expect(isInteger(fixture)).toBe(false)
    );
});