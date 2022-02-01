var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlModel = new Schema({
    id: Number,
    url: String,
    curl: String,
    data: String
});

module.exports = mongoose.model("Url", urlModel);