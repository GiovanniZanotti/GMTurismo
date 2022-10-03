
module.exports = {
    getPonto: (connection, id, callback) => {
        const sql = 'select * from pontoturistico where id = ' + id + ';';
        console.log(sql);
        connection.query(sql, callback);
    }
}