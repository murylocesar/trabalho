//const Funcionario = require('../../domain/funcionario');
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;
var oracledb = require('oracledb');


oracledb.getConnection(
	{
	  user          : "hr",
	  password      : "hr",
	  connectString : "host:1521/LAPTOP-O5G9HKPO"
	},
	function(err, connection) {
	  if (err) {
		console.error(err.message);
		return;
	  }
	});


async function getAll() {
	return await  connection.execute(
		`SELECT *
		 FROM employees`,
		[],  
		function(err, result) {
		  if (err) {
			console.error(err.message);
			doRelease(connection);
			return;
		  }
		  console.log(result.rows);
		  doRelease(connection);
		});
}


async function getSearch(req) {
	return await Funcionario.findAll({ 
		where: { 
			nome: {
				[Op.like]: '%' + req.query.nome + '%'
			}	
		} 
	});		
}

module.exports = {getAll, getSearch};
