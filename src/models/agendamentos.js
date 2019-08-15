const { Schema, model } = require('mongoose');

const AgendsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dataHora: {
        type: String,
        required: true
    },
    preferencia: {
        type: String,
        required: true
    },
    terapias: {
        type: String,
        required: true
    }
},{
    timestamps: true,
})

module.exports = model('Agends', AgendsSchema);