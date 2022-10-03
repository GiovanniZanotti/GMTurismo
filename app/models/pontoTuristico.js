module.exports = {
    getPontos: (connection, callback) => {
        const sql = 'select * from pontoturistico order by id desc;';
        console.log(sql);
        connection.query(sql, callback);
    },
    addPonto: (ponto, connection, callback) => {
        const sql = `insert into pontoturistico(nome, local, descricao, urlimagem) values("${ponto.nome}", "${ponto.local}",  "${ponto.descricao}", "${ponto.urlimagem}");`
        connection.query(sql, callback);
    }
}