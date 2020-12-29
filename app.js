const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.hsjcg.mongodb.net/todoappyoutube?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('verbindung zu datenbank');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`connecting with the port ${port}.`));