//encontrar qualquer nome ou dado de listas extensas json

const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item)=> item[chave].includes(valor)); //dar item da lista e se corresponder a verdadeiro  ele retornará o item
}
const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);