const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set('views', './app/views');
app.use(express.static('./public'));
//app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('servidor rodando na porta', port);
})

module.exports = app;