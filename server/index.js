// create express app
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/ubcsolar';
const asyncWrapper = require('./common/asyncWrapper');
// const profile = require('./model/profile');
const admin = require('./model/admin');
const member = require('./model/member');
const sponsor = require('./model/sponsor');

// route imports
const postRoutes = require('./routes/post/index');

// error imports
// Errors
const {
    ProfileBadRequestError,
    ProfileDbError,
    ProfileMissingIdError,
    ProfileNotFoundError,
    InvalidRouteError } = require('./errors/errorHandling');

// connect to database
mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error connecting to database: ' + err);
    } else {
        console.log('Connected to database');
    }
});

// middleware
app.use(cors());
app.use(bodyParser.json());

// start server
app.listen(port, async () => {

    // Development only: drop database and create index
    // await member.db.dropDatabase();
    // await member.db.collection('Member').createIndex({ "email": 1 }, { unique: true })
    // await admin.db.collection('Admin').createIndex({ "email": 1 }, { unique: true })
    // await sponsor.db.collection('Sponsor').createIndex({ "email": 1 }, { unique: true })

    console.log('Server started on port: ' + port);
});

// routes
app.get('/', asyncWrapper(async (req, res) => {
    res.send('UBC Solar');
}));

app.use(postRoutes);

// Catch all other routes
app.get('*', asyncWrapper(async (req, res) => {
    throw new InvalidRouteError("Invalid route: please check documentation");
}));

// Next Middleware to handle errors
app.use((err, req, res, next) => {
    if (!err.code) {
        err.code = 500;
    }
    console.log(req.body);
    res.status(err.code).json({ errName: err.name, errMsg: err.message, errCode: err.code, errStack: err.stack });
    // The Commented out code below is a user friendly version of the api that doesn't send the Error Stack in the response, but instead prints it in console
    // console.log(err.stack);
    // res.status(err.code).json({ errName: err.name, errMsg: err.message, errCode: err.code });
});

