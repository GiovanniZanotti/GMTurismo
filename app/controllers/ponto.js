const dbConnection = require('../../config/dbConnection');
const { getPonto } = require('../models/ponto');
const logger = require('../../config/logger');

module.exports.ponto = (app, req, res)  =>{
    
    console.log(req.query);

    var id = req.query.id;

    console.log(id);

    const dbConn = dbConnection();

    console.log('[Controller Ponto]');
    getPonto(dbConn, id, (error, result) => {

        if(result.length == 0){
            logger.log({
                level: 'error',
                message: "id inválido"
            });
            res.render('error.ejs', {error: "id inválido"});
        }

        if (!error) {
            console.log(result);
            res.render('ponto.ejs', {ponto: result});
        } else {
            
            logger.log({
                level: 'error',
                message: error.message
            });

            res.render('error.ejs', {error: "Erro na conexão com o banco de dados."});
        }
    })
}