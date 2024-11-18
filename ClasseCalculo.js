class ServicoCalculoFatura {

      getPeca(pecas, apre) {
        return pecas[apre.id];
      }

      calcularTotalFatura(pecas, apresentacoes) {
        return apresentacoes.reduce((total, apre) => {
          return total + this.calcularTotalApresentacao(pecas, apre);
        }, 0);
      }
      
      
      calcularTotalCreditos(pecas, apresentacoes) {
        return apresentacoes.reduce((total, apre) => {
          return total + this.calcularCredito(pecas,apre);
        }, 0);
      }
      
      
      calcularCredito(pecas, apre) {
        let creditos = 0;
        creditos += Math.max(apre.audiencia - 30, 0);
        if (this.getPeca(pecas, apre).tipo === "comedia") {
          creditos += Math.floor(apre.audiencia / 5);
        }
        return creditos;
      }

      calcularTotalApresentacao(pecas, apre) {
        let total = 0;
      
        switch (this.getPeca(pecas, apre).tipo) {
          case "tragedia":
            total = 40000;
            if (apre.audiencia > 30) {
              total += 1000 * (apre.audiencia - 30);
            }
            break;
          case "comedia":
            total = 30000;
            if (apre.audiencia > 20) {
              total += 10000 + 500 * (apre.audiencia - 20);
            }
            total += 300 * apre.audiencia;
            break;
          default:
            throw new Error(`Peça desconhecida: ${this.getPeca(pecas, apre).tipo}`);
        }
        return total;
      }

}
module.exports = ServicoCalculoFatura;
