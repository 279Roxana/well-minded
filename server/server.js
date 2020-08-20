const express = require('express');
const cors = require('cors');
var path = require('path');
const morgan = require('morgan')
const mongoose=require('mongoose')
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(morgan('dev'))

const resources = require("./routes/resources");
const db = process.env.MONGO_URL

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//connect to DB 
mongoose
  .connect(db, { useUnifiedTopology: true , useNewUrlParser: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));


app.get('/authors', (req, res) => {
    console.log("mongo uri", process.env.MONGO_URL)
    res.json({
        
        authors: ["Ferhat", "Minko", "Roxana", "Ahmad", "Irving"]
    })
})

// if deployed, use react build as a code source.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
// Use Router for each api
app.use("/api/resources", resources);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {

    process.env.PORT ?
        console.log("app working on  << " + process.env.ROOT_URL + "  >> listening on port  " + Port) //deployed
        :
        console.log("app working on  http://localhost:" + Port);  //locally

})