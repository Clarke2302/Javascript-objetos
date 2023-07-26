//filtrar pessoas sem complemento no dado apartamento
const clientes = require("./clientes.json");

function filtrarApes(clientes){
    return clientes.filter((cliente)=> {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
        );
    })
}
const filtrados = filtrarApes(clientes);
console.log(filtrados);