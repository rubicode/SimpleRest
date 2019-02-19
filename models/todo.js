const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  title: { type: String },
  complete: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', Todo);
