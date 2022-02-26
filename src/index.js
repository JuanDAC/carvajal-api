const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { productRoutes} = require('./src/entries/product/infrastructure/controller/routes');

app.use(bodyParser.urlencoded({ extended: true }));


productRoutes(app);


app.listen(8080);