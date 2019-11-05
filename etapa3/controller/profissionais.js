const Profissional = require("../model/profissional");

var buscar_todos = async (req, res) => {
    try {
        const data = await Profissional.find({});

        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }

}

var buscar_id = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Profissional.findById(id);
    
        return res.json(data);      
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }

}

var salvar = async (req, res) => {
    try {
        const data = await Profissional.create(req.body);

        return res.status(200).json(data);    
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }

}

var atualizar = async (req, res) => {

    try {
        const { id } = req.params;
        const { nome,email} = req.body;
    
        const update = {
            $set: {
                nome: nome,
                email: email
            }
            
        }
        const data = await Profissional.findByIdAndUpdate(id,update);
            
    
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }


}

var remover = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Profissional.findByIdAndRemove(id);
            
    
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports = {
    buscar_todos,
    buscar_id,
    salvar,
    atualizar,
    remover
}