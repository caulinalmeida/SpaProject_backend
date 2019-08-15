const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const FuncSchema = new Schema ({
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },

    senha: {
        type: String,
        required: true,
        select: false
    }
},{
    timestamps: true
})

FuncSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

module.exports = model('funcionarios', FuncSchema);