var express = require('express');
var mongoose = require('mongoose');
const urlRouter = require('./routes/urlRoute');
var app = express();
var url = 'mongodb+srv://arnoudmartins:faml123@cluster0.vwxsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
});
mongoose.connect(url);
app.listen(5000, function () {
});

app.use('/urls', urlRouter);

/*
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var url = 'mongodb+srv://arnoudmartins:faml123@cluster0.vwxsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});
mongoose.connect(url);
app.listen(5000, function () {
    console.log('Servidor escutando na porta 5000');
});

*/