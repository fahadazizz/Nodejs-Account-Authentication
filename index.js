const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require('../Account/Routes/routes.js');

const app = express();

app.use(bodyParser.json());

app.use('/api/User', userRoute);

app.get('/', (req,res) => {
    res.send("server run");
});



mongoose.connect('mongodb://localhost:27017/Account', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
    app.listen(3000, (req,res) => {
        console.log("Server running");
    });    
}).catch(() => {
    console.log("Database not connected");
});


