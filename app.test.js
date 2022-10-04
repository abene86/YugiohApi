const request = require("supertest");
const app = require("./app");
const monstercard = require("./monstercard");
const processcard = require("./processcard")
const cardJson = require("./sampleDataSetsForTesting")
const monsterProcessor = setUpForTestinProcessorClass(cardJson)
const mapOfCardInformations = monsterProcessor.getAllCardInformation()

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
  test("It should return only the card names from the cache)", () =>{
    expect(monsterProcessor.getOnlyCardNames()).toEqual(["7 Colored Fish", "Ancient Brain", ]);
  });
});

