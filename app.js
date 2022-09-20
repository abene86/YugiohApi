const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

const cities = ["Fairfax", "Vienna", "Falls Church", "Arlington"];

const populations = [24019, 16489, 14128, 236842];

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