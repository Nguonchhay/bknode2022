const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3003;

// Configure static path
app.use(express.static('public'));

// Configure environment variables
require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

// Configure layout and view
app.use(ejsLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/app');
app.set('views', 'views');

// const router = require('./routes/index');
// app.use('/', router);
require('./routes/index')(app);

const passport = require('passport');
app.use(passport.initialize());

// const { sequelize } = require('./models');
const mongoose = require("mongoose");

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    // sequelize.authenticate()
    //     .then(() => {
    //         console.log('PostgreSQL is connected.');
    //     })
    //     .catch(err => console.log(err));

    const conn_str = 'mongodb+srv://admin:admin12345@attractionapp.ld0iq.mongodb.net/bknode2022?retryWrites=true&w=majority'
    mongoose.connect(
        conn_str,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Mongodb is connected");
            }
        }
    );
});