const Func = require('../models/funcionarios');

module.exports = {
    async store(req, res) {
        const {email} = req.body;

        if (await Func.findOne({email})) {
            return res.status(400).send({error: "Usuario ja existe"});
        }

        const user = await Func.create(req.body);

        user.senha = undefined;

        return res.send({user})
    }
}