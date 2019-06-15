var notes = require('../Cotrollers/controller');


module.exports.route = function (app) {

    app.route('/udpdate/:id')
        .put(notes.updateDonnee)
    app.route('/delete/:id')
        .delete(notes.deleteDonnee)

    app.route('/')
        .get(notes.getDonne)
        .post(notes.postDonne)
}