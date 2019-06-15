var notes = require('../Cotrollers/controller');


module.exports.route =function (app) {

app.route('/post')
  .post(notes.postDonne)

  app.route('/')
  .get(notes.getDonne)

  app.route('/login')
  .post(notes.postLogin)
}