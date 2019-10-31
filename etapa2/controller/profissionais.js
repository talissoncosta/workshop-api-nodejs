const data = require("../../profissionais.json");


var buscar_todos = (req, res) => {
    res.status(200).json(data);
}

var buscar_id = (req, res) => {
    const { id } = req.params;
    const profissional = data.find(prof => prof.id == id);

    if (!profissional) return res.status(204).json();

    res.status(200).json(profissional);
}

var salvar = (req, res) => {
    const { nome, email } = req.body;
    const profissional = {
        "id": data.length + 1,
        "nome": nome,
        "email": email
    };
    data.push(profissional);
    res.status(200).json(profissional);
}

var atualizar = (req, res) => {
    const { id } = req.params;
    const profissional = data.find(prof => prof.id == id);

    if (!profissional) return res.status(204).json();
    
    const { nome,email} = req.body;

    profissional.nome = nome;
    profissional.email = email;

    res.status(200).json(profissional);

}

var remover = (req, res) => {
    const { id } = req.params;
    const profissional = data.filter(prof => prof.id != id);

    res.status(200).json(profissional);

}

module.exports = {
    buscar_todos,
    buscar_id,
    salvar,
    atualizar,
    remover
}