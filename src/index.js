const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(2000);