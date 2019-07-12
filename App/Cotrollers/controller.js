const Profile = require('../Models/model');
const Profile_article = require('../Models/modele.article');
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
            console.log("tafiditra")
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



module.exports.deleteDonnee = function (req, res) {
    Profile.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};

module.exports.postLogin = function (req, res) {
    var nom = req.body.nom
    var email = req.body.email
    var password = req.body.password
    Profile.find()
        .then(note => {
            for (let i = 0; i < note.length; i++) {
                if ((note[i].nom == nom || note[i].email == nom) && note[i].password == password) {
                    res.send('succes')
                    console.log('login validé');
                } else {
                    res.send('echec')
                    console.log('password erroné');
                }
            }
        })
}


module.exports.getArt = (req, res) => {
    Profile_article.find()
        .then(note => {
            console.log("tafiditra")
            res.send(note)
        })
        .catch(e => {
            res.status(500).send({ mes: e.mes || "erreur" })
        });
};

module.exports.postArticle = function (req, res) {
    var nom = req.body.nom
    var titre = req.body.titre
    var article = req.body.article
    var id_utilisateur = req.body.id_utilisateur
    var categorie = req.body.categorie
    var image = req.files.file.name
    var imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${image}`, function (err) {
        if (err) {
            return res.status(500).send(err, 'erreur');
        }
    });
    Profile_article.find()
        .then(note0 => {
            if (note0.length == 0) {
                id = 0;
            } else {
                id = parseInt(note0[note0.length - 1].id) + 1;
            }

            const articles = new Profile_article({ _id: id, nom: nom, article: article, id_utilisateur: id_utilisateur, comment: [], categorie: categorie, titre: titre, image: imageFile });
            (!nom || !article) ? console.log("mank donne ", nom, article) : articles.save()
                .then((note) => {
                    res.send(note)
                })
                .catch(e => {
                    res.status(500).send({ mes: e.mes || "erreur" })
                })
        })
}


module.exports.image = (req, res) => {
    try {
        let a = fs.readFileSync('./App/Cotrollers/public/' + req.params.im)
        res.write(a)
        res.end()
    } catch (e) {
        console.log("tsy lasa le sary", e.stack);
    }
}


module.exports.commentaire = (req, res) => {
    let comment = req.body.comment
    let nom = req.body.nom
    let id_article = req.body.id_article

    Profile_article.find({ _id: id_article })
        .then(note => {
            console.log(note);
            var com = note[0].comment
            com.push({ nom: nom, commentaire: comment })

            Profile_article.findByIdAndUpdate(id_article, { comment: com }, function (err, product) {
                if (err) return (err);
                console.log(product);

                res.send(product);
            });
        })
        .catch(e => {
            res.status(500).send({ mes: e.mes || "erreur" })
        });


}