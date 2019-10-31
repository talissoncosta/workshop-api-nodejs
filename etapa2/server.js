const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./routes/profissionais');

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.listen(3000, () => {
    console.log("Hello world");
})