const express = require('express');
const app = express();
const morgan = require('morgan');

const profissionaisRoutes = require('./routes/profissionais');
const authRoutes = require('./routes/auth');

const mongoose = require('mongoose');

//localhost:27017 - Endereco do servidor de banco de dados (localhost)
// sauffs2019 - Nome do banco de dados criado
const  mongo_connection  =  'mongodb://localhost:27017/sauffs2019'
const option = {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
}
mongoose.connect(mongo_connection,option).then(function () {
    console.log("conectou");
}, function (err) {
    console.log("Falha ao conectar",err);
    
});
app.use(express.json());
app.use(morgan('dev'));
app.use(profissionaisRoutes);
app.use(authRoutes);

app.listen(3000, () => {
    console.log("Hello world");
})