const Func = require('../models/funcionarios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
    async store(req, res) {
        const {email, senha} = req.body;

        const user = await Func.findOne({email}).select('+senha');

        if (!user) {
            return res.status(400).send({error: 'usuario nao encontrado'});
        }

        if (!await bcrypt.compare(senha, user.senha)) {
            return res.status(400).send({error:'senha invalida'});
        }

        user.senha = undefined;

        const token = jwt.sign({id: user.id}, authConfig.secret, {expiresIn: 86400} );

        res.send({user, token});
    }
}