const Agends = require('../models/agendamentos');

module.exports = {
    async store(req, res) {
        const { name, telefone, email, dataHora, preferencia, terapias } = req.body;

        const agend = await Agends.create({
            name,
            telefone,
            email,
            dataHora,
            preferencia,
            terapias
        })

        return res.json(agend);
    },

    async index(req,res){
        const agendaments = await Agends.find();

        return res.json(agendaments);
    } 
}