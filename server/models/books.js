// Name: Zhihao Yu
// ID: 301305633
// mongodb schema

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String,
    Description: String,
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
