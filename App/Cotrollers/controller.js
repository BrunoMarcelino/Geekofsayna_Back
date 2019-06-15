const Profile = require('../Models/model');
const Profile = require('../Models/model.article');
const fs = require('fs')
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
            (!nom || !email || !password) ? console.log(" ", nom, email, password) : profil.save()
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
module.exports.updateDonnee = function (req, res) {
    var nom = req.body.nom
    var email = req.body.email
    var password = req.body.password
    Profile.findByIdAndUpdate(req.params.id, { nom: nom, email: email, password: password }, function (err, product) {
        if (err) return (err);
        res.send(product);
    });
};

module.exports.deleteDonne = function (req, res) {
    Profile.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};
module.exports.postArticle = function (req, res) {
    var nom = req.body.nom
    var article = req.body.article
    var id_utilisateur =req.body.id_utilisateur
    var image = req.files.file.name

    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (err) {
        if (err) {
            return res.status(500).send(err, 'erreur');
        }
    });


    Profile.find()
        .then(note0 => {
            if (note0.length == 0) {
                id = 0;

            } else {
                id = parseInt(note0[note0.length - 1].id) + 1;
            }

            const profil = new Profile({ _id: id, nom: nom,email:email, password: password,photo_profile: photo_profile });
            (!nom || !email || !password) ? console.log(" ", nom,email,password) : profil.save()
                .then(() => {
                    Profile.find()
                        .then(note => {
                            res.send(note);
                        })
                })
                .catch(e => {
                    res.status(500).send({ mes: e.mes || "erreur" })
                })
                bcrypt.hash(profil.password, salt, (err, hash) => {
                    if (err) throw err;
                    profil.password = hash;
                    profil
                      .save()
                  });
        })

}