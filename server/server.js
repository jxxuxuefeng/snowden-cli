const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/todoList';
mongoose.connect(DB_URL);

const User = mongoose.model(
    'user',
    new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        }
    })
);

// User.create({ name: '王五', age: 32 });

const app = express();

app.get('/data', (req, res) => {
    User.find({}, (err, doc) => {
        res.json(doc);
    });
});

app.listen(9093, () => {
    console.log('node app start at port 9093');
});
