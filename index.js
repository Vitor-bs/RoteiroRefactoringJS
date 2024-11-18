const { readFileSync } = require('fs');
var ServicoCalculoFatura = require('./ClasseCalculo');
var Repositorio = require('./Reposi');
var gerarFaturaStr = require("./apresentacao.js");

const calculos = new ServicoCalculoFatura(new Repositorio());
const faturas = JSON.parse(readFileSync('./faturas.json'));
//const pecas = JSON.parse(readFileSync('./pecas.json'));
const faturaStr = gerarFaturaStr(faturas, calculos);
//const faturaHtml = gerarFaturaHTML(faturas, pecas);
console.log(faturaStr);
//console.log(faturaHtml);
