const express = require('express');
const mongoose = require('mongoose');

const app = express();

// app.get('/', function (req, res) {
//     res.render('index', {});
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"));
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});