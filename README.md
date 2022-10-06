# SWE-432 HW-2 Starter Application

## Submission Information

### Student Information

*Please fill in this information before submission*

* **Student Name: Abenezer Gebeyehu** 
* **Student G-Number: G01281469** 
* **Heroku Deployment URL:**

### Documentation of your 7 Scenarios

*Here please describe your 7 scenarios complete with details about the endpoint and expected output. We provide one example below. If using route parameters, please provide an example API query*

* Retrieve all the Dragon cards in Set
  * API Endpoint: GET /
  * Example: GET /
  * Expected Output: Json Output list of all the cards
* Retrieve the most expensive card from specified store (Stores supported are  ["tcgplayer", "ebay", "amazon", "coolstuffinc"])
  * API Endpoint: GET /mostexpensivecardprice/:onlineStoreName
  * Example: GET /mostexpensivecardprice/ebay
  * Expected Output: 
  {
    "cardName": "Duel Link Dragon, the Duel Dragon",
    "atk": 0,
    "attribute": "DARK",
    "card_prices": [
        {
            "cardmarket_price": "6.20",
            "tcgplayer_price": "999.99",
            "ebay_price": "949.99",
            "amazon_price": "2.77",
            "coolstuffinc_price": "0.00"
        }
    ]
}
* Retrieve all the card names from the list
  * API Endpoint: GET /allCardNames
  * Example: GET /allCardNames
  * Expected Output: ALL the card names in json format should be outputed
* Retrieve all the Dragon cards with a given level
  * API Endpoint: GET /findAllCardWithGivenLevel/:level
  * Example: GET /findAllCardWithGivenLevel/0
  * Expected Output: 
  [
    {
        "cardName": "Phantasmal Lord Ultimitl Bishbaalkin",
        "atk": 0,
        "def": 0,
        "level": 0,
        "attribute": "DARK",
        "card_prices": [
            {
                "cardmarket_price": "1.55",
                "tcgplayer_price": "1.85",
                "ebay_price": "2.74",
                "amazon_price": "1.54",
                "coolstuffinc_price": "2.99"
            }
        ]
    },
    {
        "cardName": "Ultimaya Tzolkin",
        "atk": 0,
        "def": 0,
        "level": 0,
        "attribute": "DARK",
        "card_prices": [
            {
                "cardmarket_price": "0.22",
                "tcgplayer_price": "0.21",
                "ebay_price": "0.99",
                "amazon_price": "0.34",
                "coolstuffinc_price": "2.99"
            }
        ]
    }
]
* Retrieve a dragon card using just the name
  * API Endpoint: GET /cardinformation/:nameCard
  * Example: GET /cardinformation/Blue-Eyes White Dragon
  * Expected Output: 
  {
    "cardName": "Blue-Eyes White Dragon",
    "atk": 3000,
    "def": 2500,
    "level": 8,
    "attribute": "LIGHT",
    "card_prices": [
        {
            "cardmarket_price": "0.40",
            "tcgplayer_price": "0.62",
            "ebay_price": "10.95",
            "amazon_price": "3.90",
            "coolstuffinc_price": "1.49"
        }
    ]
}
* Posts a new user created Dragon card in Set
  * API Endpoint: POST /addnewcardinformation/cardname/:nameCard/cardlevel/:level/atk/:atk/def/:def/attribute/:attribute
  * Example: POST/ /addnewcardinformation/cardname/Abenezer/cardlevel/12/atk/1000/def/800/attribute/fire
  * Expected Output:
  {
    "cardName": "Abenezer",
    "atk": "1000",
    "def": "800",
    "level": "12",
    "attribute": "fire"
}
* Update a cardname with a new one
  * API Endpoint: POST/ changeCardName/cardname/:originialnameCard/newcardname/:newCardName
  * Example: POST/ /changeCardName/cardname/Abenezer/newcardname/The Hero
  * Expected Output: 
  Before:
    {
    "cardName": "Abenezer",
    "atk": "1000",
    "def": "800",
    "level": "12",
    "attribute": "fire"
  }
  After:
  {
    "cardName": "The Hero",
    "atk": "1000",
    "def": "800",
    "level": "12",
    "attribute": "fire"
}
  


## Project Overview

This repo contains a barebones Node.js app using [Express 4](http://expressjs.com/). You will use this as the "base" version of your Microserivce application for HW Assignment #2. You will simply create a copy of this repo through GitHub classroom and then work in that repo. 

## Homework Assignment #2 Detailed Instructions

You can find the deatiled instructions for HW Assignment #2 on the [course webpage](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f21/hw2). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/) and (optionally) the [Heroku CLI](https://cli.heroku.com/) installed. You only need the Heroku CLI installed if you plan to deploy the project from the CLI instead of the Heroku web interface. See the [HW Assignment #2 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f21/hw2) for more details.

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm start
```

After executing these commands, your app should now be running on [localhost:3000](http://localhost:3000/). You can visit this in your browser to see your 

## Deploying to Heroku

Check out [our instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f21/hw2) for deploying your application to Heroku. You can use the button below for quick access to your Heroku account.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Testing with Continuous Integration

Currently, this repo is set up to run the Jest tests in the `app.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed. We don't anticpate you needing to change this configuration, as it is fine to keep all of your tests in the `app.test.js` for this assignment. 

We expect that all of your (at least) 12 unit tests will have passed via the command line by the time you turn in the assignment.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Additional Resources

For more information about using Node.js on Heroku, see these Heroku Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
