const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
});

const Link = mongoose.model('link', linkSchema);

module.exports = Link;