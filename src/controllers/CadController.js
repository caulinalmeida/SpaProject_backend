const Func = require('../models/funcionarios');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
    async store(req, res) {
        function generateToken(params = {}){
            return jwt.sign(params, authConfig.secret, {
                expiresIn: 86400
            } );
        }
        const {email} = req.body;

        if (await Func.findOne({email})) {
            return res.status(400).send({error: "Usuario ja existe"});
        }

        const user = await Func.create(req.body);

        user.senha = undefined;

        return res.send({
            user,
            token: generateToken({id: user.id})
        })
    }
}