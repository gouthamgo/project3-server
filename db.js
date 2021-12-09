const mongoose = require("mongoose");

var mongoURL = process.env.MONGOLAB_URI;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed');
})

connection.on('connected', ()=>{
    console.log('Mongo DB connection worked');
})


module.exports = mongoose


