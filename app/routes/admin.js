module.exports = function(app){
    app.post('/obra/salvar', function(req, res){

        console.log(req.query);

        let paiting = req.body;
        res.send(paiting);
    });
}