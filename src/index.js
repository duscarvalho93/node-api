const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controller/authController')(app);
require('./controller/walletController')(app);

app.get('/', (req, res) => {
    res.json({
        status: 'ok'
    })
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});