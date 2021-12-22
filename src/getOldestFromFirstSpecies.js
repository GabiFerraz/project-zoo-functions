const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoaEspecie = data.employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const AniResidentes = data.species.find((fichaAnimal) =>
    fichaAnimal.id === pessoaEspecie).residents;
  const maisVelho = AniResidentes.reduce((acc, valueAge) => {
    if (acc > valueAge.age) return acc;
    return valueAge.age;
  }, 0);
  const elementoVelho = AniResidentes.find((valueAnimal) => valueAnimal.age === maisVelho);
  return [elementoVelho.name, elementoVelho.sex, elementoVelho.age];
}
// na primeira variável, através do find usando o id do parâmetro eu chego no empregado e na lista por quem ele é responsável. Na segunda variável, novamente através do find, usando a primeira variável, eu acesso a lista de residentes das espécies. Na terceira variável, eu uso a segunda variável e aplico o reduce para achar quem tem a idade mais velha. Na última variável, eu aplico o find na segunda variável, para chegar na terceira variável e transformar ela em um objeto. E aí no retorno, eu monto o array que é o pedido no retorno do teste usando a última variável.

module.exports = getOldestFromFirstSpecies;
