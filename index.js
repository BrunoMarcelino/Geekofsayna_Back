var express = require("express")
var bodyParser = require("body-parser")
var r = require("./App/Routes/route").route
const dbConfig = require('./Config/dbconfig');
const mongoose = require('mongoose');
var app = express();
var cors = require('cors')
mongoose.Promise = global.Promise;

// Connecting to the database

//app.use('/',r);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

r(app)
app.listen(8080);