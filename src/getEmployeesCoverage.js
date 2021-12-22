const data = require('../data/zoo_data');

const arrayRetorno = (infos) => ({
  id: infos.id,
  fullName: `${infos.firstName} ${infos.lastName}`,
  species: data.species.filter((valueSpecie) =>
    infos.responsibleFor.includes(valueSpecie.id)).map((valueName) => valueName.name),
  locations: data.species.filter((local) =>
    infos.responsibleFor.includes(local.id)).map((valueLocal) => valueLocal.location),
});
// montei nessa variável o objeto da forma que ele espera no retorno. Meu infos é o objeto do meu employees, através dele eu estou pegando as informações. no species eu usei o filter para filtrar a espécie, o includes para verificar se a espécie estava dentro do responsibleFor, e o map para montar meu array de retorno, me devolvendo só o que eu queria. O location segue a mesma lógica.

function getEmployeesCoverage(parameter) {
  if (!parameter) {
    return data.employees.map((valuePersons) => arrayRetorno(valuePersons));
  }
  if (parameter.name) {
    const nameTotal = data.employees.find((valueParam) =>
      valueParam.firstName === parameter.name || valueParam.lastName === parameter.name);
    return arrayRetorno(nameTotal);
  }
  if (data.employees.some((valueParam) => valueParam.id === parameter.id)) {
    const id = data.employees.find((valueParam) => valueParam.id === parameter.id);
    return arrayRetorno(id);
  }
  throw new Error('Informações inválidas');
}
// primeiro eu verifiquei se o meu parâmetro não existe (o ! é o não, o contrário de, como tá antes do parâmetro é se não existe parâmetro), aí mandei retornar através do map, todas as pessoas do employees dentro da função que eu criei com a estrutura. Depois eu verifiquei se foi passado um nome no parâmetro e mandei retornar o que eu queria. Depois eu verifiquei através do some se alguém do employees era igual ao id passado, se for, eu busquei a pessoa e mandei retornar o que eu queria, se não for, vai me retornar o erro.
// falsy e truthy

module.exports = getEmployeesCoverage;
