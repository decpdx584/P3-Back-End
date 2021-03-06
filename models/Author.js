const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new mongoose.Schema({
    name: String,
    faved: [userId],
    author_id: String,
    screenshot: String,
    description: String,
    cohort: String,
    gameUrl: String
})

module.exports = Author = mongoose.model('Author', authorSchema); 