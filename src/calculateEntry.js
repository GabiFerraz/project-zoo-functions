const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const qntPessoas = entrants.reduce((acc, valueAge) => {
    if (valueAge.age < 18) {
      acc.child += 1;
    }
    if (valueAge.age >= 18 && valueAge.age < 50) {
      acc.adult += 1;
    }
    if (valueAge.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return qntPessoas;
}
// em uma variável eu guardei o meu reduce. O meu valueAge é o array que a função vai receber de parâmetro, aí através dele, acessei o age e obtive o valor de quantas pessoas crianças, adultos ou senior existiam, e através do meu acc, incluí esse valor dentro do objeto passado ao final do meu reduce que é como o meu acc inicia e é o que vai me retornar quando eu retornar a minha variável.
// alterando para dar outro comite pq o avaliador não rodou.

function calculateEntry(entrants) {
  if (entrants) {
    if (Object.keys(entrants).length === 0) {
      return 0;
    }
    const funQntPessoas = countEntrants(entrants);
    const precos = data.prices;
    const valorTot = (funQntPessoas.child * precos.child)
      + (funQntPessoas.adult * precos.adult) + (funQntPessoas.senior * precos.senior);
    return valorTot;
  }
  return 0;
}
// eu fiz uma verificação através do if se eu recebi um parâmetro, aí dentro dele fiz outra verificação com outro if se eu recebi um objeto vazio ({}) como parâmetro e nesse caso me retornar um 0, aí se não for um objeto vazio, voltando para primeira verificação, eu guardei o retorno da minha função de cima em uma variável, guardei os meus valores do arquivo data em outra variável e criei outra variável fazendo os cálculos de multiplicação de cada um e soma para retornar o valor total. Aí por último, eu mandei retornar um 0, caso nenhuma das condições acima sejam satisfatórias, para poder cumprir o requisito de se não receber nenhum parâmetro retornar 0.

module.exports = { calculateEntry, countEntrants };
