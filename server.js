const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/views.js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});