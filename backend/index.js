const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const timeRoutes = require('./routers/timeRoutes')

dotenv.config();

mongodbURL = "mongodb+srv://melon:1@cluster0.yjhbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(console.log('database server is running')).catch(error => console.log(error.reason))

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/api/time', timeRoutes) // route for time Routes

app.listen(port, () => {
  console.log('server at port')
})
