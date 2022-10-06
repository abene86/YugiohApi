const request = require("supertest");
const app = require("./app");
const monstercard = require("./monstercard");
const processcard = require("./processcard")
const cardJson = require("./sampleDataSetsForTesting")
const monsterProcessor = setUpForTestinProcessorClass(cardJson)
const mapOfCardInformations = monsterProcessor.mapOfCardInformations

function setUpForTestinProcessorClass(cardJson){
    let monsterProcessor = new processcard(cardJson)
    return monsterProcessor
}

describe("Get card information Using processesMonsterCard by name", ()=>{
  test("It should return a monster object with the name of the monstercards", () =>{
    expect(monsterProcessor.getInformationByCardName("Ancient Brain")).toEqual(mapOfCardInformations.get("Ancient Brain"));
  });
});

describe("Get monster card information using processesMonsterCard by name", ()=>{
  test("It should return a null value if the card with given name does not exist in map", () =>{
    expect(monsterProcessor.getInformationByCardName("Abenezer the wise")).toEqual(null)
  });
});

describe("Get all the monster cards with given level", ()=>{
  test("It should return an array of all the monstercards with given level", () =>{
    expect(monsterProcessor.findAllCardWithSpecifiedLevel(4)).toEqual([mapOfCardInformations.get("7 Colored Fish")]);
  });
});

describe("Get all the monster cards with given level", ()=>{
  test("It should return an empty list if user input an invalid level(which does not match level>=1 && level <=6)", () =>{
    expect(monsterProcessor.findAllCardWithSpecifiedLevel(12)).toEqual([]);
  });
});

describe("Get all the monster cards names from cache", ()=>{
  test("It should return only the card names from the cache", () =>{
    expect(monsterProcessor.getOnlyCardNames()).toEqual(["7 Colored Fish", "Ancient Brain", ]);
  });
});

describe("Get the most expensive card from the given online store", ()=>{
  test("It should return the most expensive card given online store", () =>{
    expect(monsterProcessor.getMostExpensiveCardPrice("amazon")).toEqual(mapOfCardInformations.get("Ancient Brain"));
  });
});

describe("Get the most expensive card from the given online store", ()=>{
  test("It should return null if the provided store is not in dataset", () =>{
    expect(monsterProcessor.getMostExpensiveCardPrice("abenezer_store")).toEqual(null);
  });
});
describe("Check if the helper functin works correctly", ()=>{
  test("It should return false if the level is not between 0>=  && <=12", () =>{
    expect(monsterProcessor.isCardLevelAppropriate(13)).toEqual(false);
  });
});
describe("Check if the helper functin works correctly", ()=>{
  test("It should false if the card does not exist in the map", () =>{
    expect(monsterProcessor.doesTheCardExistInCache("abenezer_store")).toEqual(false);
  });
});
describe("Check if the helper functin works correctly", ()=>{
  test("It should return false if store provided does not exist in the set", () =>{
    expect(monsterProcessor. isItAnAppopriateStore("abenezer_store")).toEqual(false);
  });
});

