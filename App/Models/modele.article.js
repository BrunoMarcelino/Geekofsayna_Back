const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    _id: {type:Number,required:true},
    nom: String,
	titre: String,
    article:String,
    id_utilisateur:String,
    image:String,
    comment:Array,
    categorie:String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('article',ProfileSchema);