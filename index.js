const { readFileSync } = require('fs');
const ServicoCalculoFatura = require('./ClasseCalculo');

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(valor / 100);
}


function gerarFaturaStr(fatura, pecas, calculos) {

  let faturaStr = `Fatura ${fatura.cliente}\n`;
  for (let apre of fatura.apresentacoes) {
      faturaStr += `  ${calculos.getPeca(pecas, apre).nome}: ${formatarMoeda(calculos.calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos)\n`;
  }
  faturaStr += `Valor total: ${formatarMoeda(calculos.calcularTotalFatura(pecas, fatura.apresentacoes))}\n`;
  faturaStr += `Créditos acumulados: ${calculos.calcularTotalCreditos(pecas, fatura.apresentacoes)} \n`;
  return faturaStr;
}


//function gerarFaturaHTML(fatura, pecas) {
//  let html = `<html>\n<p>Fatura ${fatura.cliente}</p>\n<ul>\n`;
//  for (let apre of fatura.apresentacoes) {
//    html += `<li>${getPeca(pecas, apre).nome}: ${formatarMoeda(calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos)</li>\n`;
//  }
//  html += `</ul>\n<p>Valor total: ${formatarMoeda(calcularTotalFatura(pecas, fatura.apresentacoes))}</p>\n`;
//  html += `<p>Créditos acumulados: ${calcularTotalCreditos(pecas, fatura.apresentacoes)}</p>\n</html>`;
//  return html;
//}

const calculos = new ServicoCalculoFatura();
const faturas = JSON.parse(readFileSync('./faturas.json'));
const pecas = JSON.parse(readFileSync('./pecas.json'));
const faturaStr = gerarFaturaStr(faturas, pecas, calculos);
//const faturaHtml = gerarFaturaHTML(faturas, pecas);
console.log(faturaStr);
//console.log(faturaHtml);
