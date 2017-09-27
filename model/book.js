'use strict';

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  description: {type: String, minlength: 10},
  publisher: {type: String},
  // reviews: [{type: mongoose.Schema.Types.ObjectID, ref: 'review'}]
});

module.exports = mongoose.model('book', bookSchema);
