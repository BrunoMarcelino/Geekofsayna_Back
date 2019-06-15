const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
    article:String,
    id_utilisateur:String,
    image:String,
    comment:Array
    
}, {
    timestamps: true
});

module.exports = mongoose.model('article',ProfileSchema);