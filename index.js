const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.contato(app);
routes.sobre(app);
routes.pontosTuristicos(app);
routes.savePonto(app);
routes.ponto(app);