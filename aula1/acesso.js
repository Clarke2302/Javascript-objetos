//armazenar dados de uma loja e clientes dela
//objeto usa variavel = { dados };
const cliente = {
    nome: "Sara",
    idade: 37,
    cpf: "129029384839",
    email: "Saraninjatelança@gmail.com",
};

//para mostrar só um dado do cliente usamos cliente.dado

console.log(`O nome do cliente é ${cliente.nome}, essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF desse cliente são ${cliente.cpf.substring(0, 3)}.`);

