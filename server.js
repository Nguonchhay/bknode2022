const express = require('express');
const ejsLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3003;

// Configure static path
app.use(express.static('public'));

// Configure layout and view
app.use(ejsLayout);
app.set('view engine', 'ejs');
app.set('layout', './layouts/app');
app.set('views', 'views');

// const router = require('./routes/index');
// app.use('/', router);
require('./routes/index')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});