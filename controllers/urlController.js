
var Url = require('../models/urlModel');

var get = function (req,res) {   

    var inserirURL = function ( req, res){
        var url = new Url(req.body);
        url.curl = encurtarURL();
        Url.save(function (err) {            
            res.status(200);
            res.send(url);            
        })
    };

    var consultarURLPorId = function (req, res) {
        Url.findById(req.params.id, function (err, url) {           
            res.status(200);
            res.send(url);
        })
    };

    var listarUrlPorData = function(req, res){
        const conexao = await GerarConexao();
        const [rows] = await conexao.query('Select CURL From TABELA Where DATA = ?;');
        const valores = [data];
        return await conexao.query(sql, valores);
    };

    var listarUrl = function(req, res){
        const conexao = await GerarConexao();
        const [rows] = await conexao.query('Select CURL From TABELA Where URL = ?;');
        const valores = [url];	
        return await conexao.query(sql, valores);        
    };

    return {
        inserirURL: inserirURL,
        consultarURLPorId: consultarURLPorId,
        listarUrlPorData: listarUrlPorData,
        listarUrl: listarUrl
    }
};

module.exports = get;