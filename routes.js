const pages = require('./controllers/pages');
const notes = require('./controllers/notes');

module.exports = function (app) {
    app.post('/todos', notes.add);
    app.get('/', pages.index);
    app.get('/todos', pages.list);
    app.all('*', pages.error404);

    app.use((err, req, res) => {
        console.error(err);
        res.sendStatus(500);
    })
};