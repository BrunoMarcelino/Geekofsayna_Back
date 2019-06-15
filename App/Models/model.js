console.log('test');
console.log('test1');
const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    email: String,
    password:{ type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('profil',ProfileSchema);
