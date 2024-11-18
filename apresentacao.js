var formatarMoeda = require("./util.js");

module.exports = function gerarFaturaStr(fatura, calculos) {

    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${calculos.repo.getPeca(apre).nome}: ${formatarMoeda(calculos.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${formatarMoeda(calculos.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calculos.calcularTotalCreditos(fatura.apresentacoes)} \n`;
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