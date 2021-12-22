const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const acharPessoa = data.employees.find((valuePerson) =>
    valuePerson.firstName === employeeName || valuePerson.lastName === employeeName);

  if (acharPessoa) {
    return acharPessoa;
  }
  return {};
}

// através do find eu achei a pessoa passada no parâmetro usando o primeiro ou último nome e salvei em uma variável.
// com o if eu mandei retornar a minha variável se ela tiver recebido um parâmetro, ou retornar um objeto vazio se ela não tiver recebido um parâmetro.

module.exports = getEmployeeByName;
