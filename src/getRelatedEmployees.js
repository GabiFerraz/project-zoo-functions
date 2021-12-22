const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((valuePerson) => valuePerson.managers.includes(id));
}
// estou usando o some para acessar o meu empregado e junto com o includes se o id passado no parâmetro está dentro do meu managers, me retornando true or false.

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const pessoaResp = data.employees.filter((valuePerson) =>
      valuePerson.managers.includes(managerId));
    return pessoaResp.map((responsibleFor) =>
      `${responsibleFor.firstName} ${responsibleFor.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// chamo a minha função dentro do meu if pra ver se ela é verdadeira, se ela for, através do filter eu pego todas as pessoas que tem como gerente o id passado no parâmetro e salvo em uma variável, aí eu uso o map nessa variável pra me retornar um novo array, onde dentro desse array vai vir o nome e o sobrenome das pessoas por quem o gerente do parâmetro for responsável.

module.exports = { isManager, getRelatedEmployees };
