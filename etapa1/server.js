const express = require('express');
const app = express();
const morgan = require('morgan');

const data = require("../profissionais.json");

app.use(express.json());
app.use(morgan('dev'))

//Verbos HTTP
//GET - Receber dados de um Resource
app.get('/profissionais', (req,res) =>{
    res.status(200).json(data);
})
app.get('/profissionais/:id', (req,res) =>{
    const { id } = req.params;
    const profissional = data.find( prof => prof.id == id);

    if (!profissional) return res.status(204).json();
    
    res.status(200).json(profissional);
})

//POST - Enviar dados ou informações para serem processados por um Resource.
app.post('/profissionais', (req,res) =>{
    const { nome, email } = req.body;
    const profissional = {
        "id": data.length + 1,
        "nome": nome,
        "email": email
    };
    data.push(profissional);
    res.status(200).json(profissional);
})

//PUT - Atualizar dados de um Resource
app.put('/profissionais/:id', (req,res) =>{
    const { id } = req.params;
    const profissional = data.find(prof => prof.id == id);

    if (!profissional) return res.status(204).json();
    const { nome, email } = req.body;

    profissional.nome = nome;
    profissional.email = email;

    res.status(200).json(profissional);

})


//DELETE - Deletar um Resource
app.delete('/profissionais/:id', (req,res) =>{
    const { id } = req.params;
    const profissional = data.filter(prof => prof.id != id);
    
    res.status(200).json(profissional);

})

app.listen(3000, () => {
    console.log("Hello world");
})