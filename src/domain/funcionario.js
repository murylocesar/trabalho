const Sequelize = require('sequelize');
const mysql = require('../infrastructure/data/oracle.js');

/**
 * select e.first_name || ' ' || e.last_name as NOME,
 *  E.EMAIL || '@empresa.com'  as email, 
 * e.phone_number as telefone, 
 * e.hire_date as dt_nascimento, 
 * e.salary 
 * from employees e;
 *  * 
 */

const Funcionario = oracle.define('employees',
	{
		employee_id: {
			type: Sequelize.STRING(25),
			primaryKey: true,
    	},
		first_name: {
			type: Sequelize.STRING(25)
		},
		last_name: {
			type: Sequelize.STRING(50)
		},
		email: {
			type: Sequelize.STRING(25)
		},
		phone_number: {
			type: Sequelize.DOUBLE
		},
		hire_date: {}
			type: Sequelize.DOUBLE
        },
        job_id: {
            
        }
	},
	{ 
		freezeTableName: true,
		timestamps: false
	}
);

module.exports = Funcionario;