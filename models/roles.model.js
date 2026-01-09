const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    id:{
        type: Number,       
        required: true,
        unique: true,
    },
    name:{
        type: String,
        default: null,
    }
})

const roles = mongoose.model('roles', roleSchema);

module.exports = roles;    




