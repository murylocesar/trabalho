const funcionario = require('../service/funcionario');

async function getAll (req, res) {
return await funcionario
        .getAll()
        .catch(err => {
        res.status(err.statusCode || 500).send(err.msg);
        })
        .then(q => {
        return res.status(200).send(q.msg);
        });
}


module.exports = {getAll};