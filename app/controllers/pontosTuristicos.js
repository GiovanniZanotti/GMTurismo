const dbConnection = require('../../config/dbConnection');
const { addPonto, getPontos } = require('../models/pontoTuristico');
const logger = require('../../config/logger');

module.exports.pontosTuristicos = (app, req, res)  =>{

    res.render('pontosTuristicos.ejs',{errors: {}, ponto: {}});
}

module.exports.homePontosTuristicos = (app, req, res)  =>{

    const dbConn = dbConnection();

    console.log(req.query);

    console.log('[Controller Home]');
    getPontos(dbConn, (error, result) => {
        if (!error) {
            console.log(result);
            res.render('home.ejs', {pontos: result});
        } else {
            logger.log({
                level: 'error',
                message: error.message
            });
            res.render('error.ejs', {error: "Erro na conexão com o banco de dados."});
        }
    })
}

module.exports.addPontosController = (app, req, res) => {
    console.log('[Controller Home Add Ponto]');
    let ponto = req.body;
    console.log(ponto);

    console.log(req.query);

    dbConn = dbConnection();
    addPonto(ponto, dbConn, (error, result) => {
        if (!error) {
            console.log(result);
            res.redirect("/")
        } else {
            logger.log({
                level: 'error',
                message: error.message
            });
            let pagina = "<h1>Erro encontrado</h1><h2>"+error+"</h2>";
            res.status(500).send(pagina);
        }
    });
  }