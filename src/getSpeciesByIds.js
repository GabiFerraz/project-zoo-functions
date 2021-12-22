const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((valueSpecie) => ids.includes(valueSpecie.id), []);
}

// o filter vai me trazer todos os elementos que satisfazem a minha condição.
// o parâmetro passado no filter é exatamente o meu specie do arquivo data.
// o .includes está verificando se o id passado no parâmetro existe no meu array, retornando true or false.
// coloquei no final o [] para que ele comece como um array vazio e assim, retorne um array vazio caso não seja passado nenhum parâmetro.

module.exports = getSpeciesByIds;
