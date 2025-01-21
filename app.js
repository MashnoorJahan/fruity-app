const express = require('express');
const cors = require("cors")
const app = express();

const logger = require('./logger');

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger)

const router = require("./routes/fruits")

app.get('/', (req, res) => {
  res.send('Hello Fruity!');
})

app.use('/fruits', router);

module.exports = app