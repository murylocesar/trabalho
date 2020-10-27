const restaurante = require('../infraestructure/repository/funcionario');


async function getAll() {
  var retorno = await restaurante.getAll();
  
  if (!retorno) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar os restaurante'
    };
  }
  return retorno;
}


module.exports ={getAll};