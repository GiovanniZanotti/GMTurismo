
const { check, validationResult } = require('express-validator');
const { contato } = require('../controllers/contato');
const { sobre } = require('../controllers/sobre');
const { pontosTuristicos, homePontosTuristicos, addPontosController } = require('../controllers/pontosTuristicos');
const { ponto } = require('../controllers/ponto');

module.exports = {
    home: (app) => {
        app.get('/', (req, res) => {
            homePontosTuristicos(app, req, res);
        });
    },
    pontosTuristicos: (app) => {
        app.get('/pontosTuristicos', (req, res) => {
            pontosTuristicos(app, req, res);
        });
    },
    ponto: (app) => {
        app.get('/ponto', (req, res) => {
            ponto(app, req, res);
        });
    },
    contato: (app) => {
        app.get('/contato', (req, res) => {
            contato(app, req, res);
        });
    },
    sobre: (app) => {
        app.get('/sobre', (req, res) => {
            sobre(app, req, res);
        });
    },
    savePonto: (app) => {
        app.post('/ponto/salvar', 
        [
            check('nome').isLength({min:1, max:100}).withMessage('Nome deve ter no mínimo 5 caracteres'),
            check('local').isLength({min:1, max: 100}).withMessage('Local deve ter no mínimo 5 caracteres'),
            check('descricao').isLength({min:1, max: 250}).withMessage('Descrição deve ter no mínimo 1 e no máximo 250 caracteres'),
            check('urlimagem').isURL().withMessage('URL da imagem deve conter um link')
        ],(req, res) => {

            console.log('[Rota salvar ponto]');

            const err = validationResult(req);

            if (!err.isEmpty()) {
                let errors = err.array();
                res.render('pontosTuristicos', {errors: errors, ponto: {}});
                return;
            }

            console.log("passou routes savePonto");

            addPontosController(app, req, res); //Novo controller
        })
    }
}