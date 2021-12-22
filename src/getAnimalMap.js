const data = require('../data/zoo_data');

const includes = ({ sorted, sex }) => {
  if (sorted) {
    return data.species.reduce((acc, { location, name, residents }) => {
      acc[location].push({ [name]: residents.filter((sexAnimal) =>
        sexAnimal.sex === sex || sex === '').map((nameAnimal) => nameAnimal.name).sort() });
      return acc;
    }, { NE: [], NW: [], SE: [], SW: [] });
  }
  return data.species.reduce((acc, { location, name, residents }) => {
    acc[location].push({ [name]: residents.filter((sexAnimal) =>
      sexAnimal.sex === sex || sex === '').map((nameAnimal) => nameAnimal.name) });
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
};
// Nessa função includes, eu passei um parâmetro desestruturado de sorted e sex pq é só o que eu vou precisar verificar. Se no parâmetro tiver o sorted como true, ele vai me retornar o que eu quero, se não, ele vai para o meu "else". No meu sorted, se tiver sido passado também o sexo, ele vai me retornar o nome dos animais do sexo passado de forma ordenada, se não tiver o sexo (vai entrar na string vazia), ele vai me retornar o nome dos animais de forma ordenada. Se não tiver o sorted, ele vai pro segundo retorno, aí se tiver sido passado o sexo, ele vai me retornar o nome dos animais do sexo passado, se não tiver o sexo (vai entrar na string vazia), ele vai me retornar o nome dos animais, que seria a opção do includes name no parâmetro.

function getAnimalMap({ includeNames, sorted, sex = '' } = {}) {
  if (includeNames) {
    return includes({ sorted, sex });
  }
  return data.species.reduce((acc, animal) => {
    acc[animal.location].push(animal.name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
// Aqui na minha função principal, passei o parâmetro desestruturado do includes name, sorted e do sex que se não for passado no parâmetro será igual uma string vazia e toda essa desestruturação, se nenhuma delas for passada, será igual a um objeto vazio, para poder atender todos os requisitos. Se, o includes name for true, aí vou retornar a minha primeira função. Se não for, aí ele vai ter caído no objeto vazio, que pode ser o parâmetro vazio ou diferente de includes name, e vai me retornar a segunda opção, quer seria os animais categorizados por localização.

// console.dir(getAnimalMap({ includeNames: true }), { depth: null });

module.exports = getAnimalMap;
