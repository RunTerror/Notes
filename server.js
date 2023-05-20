const express = require('express');

const Note = require('./models/Note');

const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://abhishekbansal:MacK1234@cluster0.etbgyj9.mongodb.net/?retryWrites=true&w=majority").then(
    function () {
        app.get('/', function (req, res) {
            res.send("This is home page");
        });
        
        const notesRouter=require('./routes/Note');
        app.use("/notes", notesRouter );


    }
);

const PORT=process.env.PORT || 1000;
app.listen(PORT, function (req, res) {
    console.log("server started at port 1000");
});