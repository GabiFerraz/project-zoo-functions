const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const acharAnimal = data.species.find((valueName) => valueName.name === animal);
  const idadeMin = acharAnimal.residents.every((animalAge) => animalAge.age >= age);

  return idadeMin;
}

// estou usando o find para achar a espécie passada no parâmetro através do name.
// estou usando o every para, depois de achar a espécie, verificar se todos os animais daquela espécie possuem a idade mínima especificada no parâmetro, retornando true or false.

module.exports = getAnimalsOlderThan;
