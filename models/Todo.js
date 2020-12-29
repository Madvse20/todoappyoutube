const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

// todos
module.exports = mongoose.model('todo', todoSchema);