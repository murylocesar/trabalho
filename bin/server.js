const app = require('../app');
const port = process.env.API_PORT || 8000;

console.log('teste')

app.listen(port, () => {
    console.log(`Executando no endereco - http://localhost:${port}`);
});
