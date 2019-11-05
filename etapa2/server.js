const express = require('express');
const app = express();
const morgan = require('morgan');

const profissionaisRoutes = require('./routes/profissionais');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(morgan('dev'));
app.use(profissionaisRoutes);
app.use(authRoutes);

app.listen(3000, () => {
    console.log("Hello world");
})