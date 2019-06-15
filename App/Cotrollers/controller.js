const Profile = require('../Models/model');
//var bcrypt = require('bcryptjs');
//var salt = bcrypt.genSaltSync(10);


module.exports.postDonne = function (req, res) {
    var nom = req.body.nom
    var email = req.body.email
    var password = req.body.password
    Profile.find()
        .then(note0 => {
            if (note0.length == 0) {
                id = 0;

            } else {
                id = parseInt(note0[note0.length - 1].id) + 1;
            }

            const profil = new Profile({ _id: id, nom: nom, email: email, password: password });
            (!nom || !email || !password) ? console.log("Enregistré: ", nom, " ", email, " ", password) : profil.save()
                .then((note) => {

                    res.send(note);

                })
                .catch(e => {
                    res.status(500).send({ mes: e.mes || "erreur" })
                })
        })

}


module.exports.getDonne = (req, res) => {
    Profile.find()
        .then(note => {
            res.send(note)
        })
        .catch(e => {
            res.status(500).send({ mes: e.mes || "erreur" })
        });
};

module.exports.postLogin = function (req, res) {
    var nom = req.body.nom
    var email = req.body.email
    var password = req.body.password
    Profile.find()
        .then(note => {
            for(let i=0;i<note.length;i++){
                if((note[i].nom==nom || note[i].email==nom) && note[i].password==password){
                    res.send('succes')
                    console.log('login validé');
                } else {
                    res.send('echec')
                    console.log('password erroné');
                }
            }
        })
}