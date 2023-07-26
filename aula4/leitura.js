//Ler arquivo .json
//o que é require
//é uma função do node para puxar o codigo de outro lugar
//também podemos reaproveitar códigos de outros arquivos

const dados = require("./client.json");

//console.log(dados);
//console.log(typeof dados); //objeto

const clienteEmString = JSON.stringify(dados); //transformar o objeto em string

//console.log(clienteEmString);
//console.log(typeof clienteEmString); //string

//console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString); //transformar de novo em objeto

console.log(objetoCliente);
console.log(typeof objetoCliente);
console.log(objetoCliente.nome);