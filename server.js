const express = require('express');

const app = express();
const PORT = process.env.PORT || 3003;

// const router = require('./routes/index');
// app.use('/', router);
require('./routes/index')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});