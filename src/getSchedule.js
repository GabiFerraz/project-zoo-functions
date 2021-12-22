const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasHorarios = (diasDaSemana) => {
  const horarios = diasDaSemana.reduce((acc, dia) => {
    if (dia === 'Monday') {
      acc[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return acc;
    }
    acc[dia] = { officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: species.filter((animais) =>
        animais.availability.includes(dia)).map((valueSpecies) => valueSpecies.name) };
    return acc;
  }, {});
  return horarios;
};

function getSchedule(scheduleTarget) {
  const diasDaSemana = ['Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday', 'Monday'];
  const horariosDias = diasHorarios(diasDaSemana);
  if (scheduleTarget === undefined) return horariosDias;
  if (!diasDaSemana.includes(scheduleTarget) && !data.species.some((valueAni) =>
    valueAni.name === scheduleTarget)) return horariosDias;
  if (diasDaSemana.includes(scheduleTarget)) {
    return { [scheduleTarget]: horariosDias[scheduleTarget] };
  }
  return data.species.find((valueAni) => valueAni.name === scheduleTarget).availability;
}

// console.dir(getSchedule(), { depth: null }); => uso para retornar em detalhes o que eu que eu tenho no meu console.

// criei uma variável para guardar minha primeira função com reduce que vai montar e me retornar a estrutura do meu objeto com o dia da semana, o horário de funcionamento e os animais disponíveis. No meu if eu verifiquei se o dia era segunda, aí usei meu acc, com meu dia em [] pois estava construindo minha chave, aí coloquei pra minha chave segunda receber o horário e exibição diferentes, pois o zoo é fechado nas segundas e mandei retornar meu acc para incluir no objeto vazio que passei como segundo parâmetro da minha função. Depois, se não for segunda, eu construi dinamicamente os outros dias da semana. Usei meu acc e meu dia em [] novamente, aí no meu officeHour eu usei o template string pra construir o meu retorno, escrevendo as palavras e dentro do meu $ eu acessei o meu data, dentro dele o meu hours e passei na posição o meu dia e acessei o meu horário de abertura, depois fiz a mesma coisa para pegar meu horário de fechamento. Aí depois fui pra minha segunda chave que é o exhibition, onde através do filter eu acessei as espécies dos meus animais, e através do meu includes eu verifiquei os animais que estavam disponíveis para aquele dia da semana e aí usei meu map para retornar meu array de animais disponíveis. Retornei meu acc para que tudo fosse anexado no meu objeto vazio, e depois retornei a minha variável onde guardei tudo.

// a minha segunda e principal função é para retornar tudo que eu preciso. Criei uma variável com um array com os dias da semana para eu poder usar e acessar dinamicamente. Salvei minha primeira função em uma variável para facilitar o uso e passei como parâmetro dela o meu array de dias da semana. Aí montei minhas condições. O meu primeiro if eu verifico se o meu parâmetro está vazio, estando, ele retorna minha primeira função. O meu segundo if eu verifico através do includes se o que foi verificado não é um dia da semana e depois, através do some se o meu parâmetro não é um animal. Não sendo, eu retorno minha primeira função. Depois eu verifico se o parâmetro passado é um dia da semana através do meu includes e do meu array dos dias da semana, se for, eu pego qual o dia passado e retorno a minha primeira função referente ao dia pedido. E por último, se o que foi passado no parâmetro foi um animal, eu retorno através do find, o array com os dias da semana que aquele animal está disponível.

module.exports = getSchedule;
