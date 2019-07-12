var notes = require('../Cotrollers/controller');


module.exports.route = function (app) {

    app.route('/update/:id')
        .put(notes.updateDonnee)
    app.route('/delete/:id')
        .delete(notes.deleteDonnee)

    app.route('/image/:im')
        .get(notes.image)


    app.route('/article')
        .post(notes.postArticle)
	.get(notes.getArt)

    app.route('/comment')
        .put(notes.commentaire)

    app.route('/login')
        .post(notes.postLogin)
        
    app.route('/')
        .get(notes.getDonne)
        .post(notes.postDonne)
  app.route('/')
  .get(notes.getDonne)

  app.route('/login')
  .post(notes.postLogin)
}