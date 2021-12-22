// const { animal } = require('faker');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const totalAnimais = data.species.reduce((acc, valueAnimal) => {
      acc[valueAnimal.name] = valueAnimal.residents.length;
      return acc;
    }, {});
    return totalAnimais;
  }
  if (animal.sex) {
    const acharAnimal = data.species.find((valueAnimal) => valueAnimal.name === animal.specie);
    return acharAnimal.residents.filter((valueSexAnimal) =>
      valueSexAnimal.sex === animal.sex).length;
  }
  if (animal) {
    return data.species.find((valueAnimal) => valueAnimal.name === animal.specie).residents.length;
  }
}
// quando um parâmetro fica vazio ele retorna undefined, então fiz um if para verificar se essa condição é verdadeira. Em uma variável, através do meu reduce, eu criei um objeto onde eu gravei o tipo do animal e a quantidade existente dele através do meu acc (por isso é necessário retornar ele e colocar as {} para ele iniciar sendo um objeto), depois eu retornei minha variável.
// aí eu fiz outro if para verificar se for passado no parâmetro além do name do animal, o sexo, aí salvei na minha variável, através do find, qual animal foi passado no parâmetro. Depois, retornei essa minha variável, acessando os residentes e através do filter, eu peguei o sexo do animal passado no parâmetro e ele retorna quantos animais daquele sexo existem. Coloquei ele primeiro porque existem mais parâmetros e aí é melhor meu if passar por mais primeiro para depois ir pro menos.
// aí fiz meu último if, se no parâmetro for passado só o name do animal, através do find ele me retorna quantos animais daquele tipo existem. Por isso usei o .length nesse e no if passado, para me retornar a quantidade.

module.exports = countAnimals;
