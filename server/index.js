// create express app
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

// route imports
const postRoutes = require('./routes/post/index');

// connect to database
mongoose.connect('mongodb://localhost:27017/ubcsolar', { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

// middleware
app.use(cors());
app.use(bodyParser.json());

// start server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

// routes
app.get('/', (req, res) => {
    res.send('UBC Solar');
});

app.use(postRoutes);


