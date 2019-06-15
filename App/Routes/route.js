var notes = require('../Cotrollers/controller');


module.exports.route = function (app) {

    app.route('/udpdate/:id')
        .put(notes.updateDonnee)
    app.route('/delete/:id')
        .delete(notes.deleteDonnee)

    app.route('/image/:im')
        .get(notes.image)


    app.route('/article')
        .post(notes.postArticle)

    app.route('/comment')
        .put(notes.commentaire)

    app.route('/login')
        .post(notes.postLogin)
        
    app.route('/')
        .get(notes.getDonne)
        .post(notes.postDonne)
}