const express = require('express')
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')
const { port } = require('./config/keys')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(passport.initialize())

app.listen(port, err => {
  if (err) throw err
  console.log(`app is listening on ${port}`)
})