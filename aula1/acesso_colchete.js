const cliente = {
    nome: "Eva",
    idade: 1000,
    cpf: "129029349505",
    email: "Opecadomoraaolado@gmail.com",
};

//para mostrar só um dado do cliente podemos usar também string dentro do colchete

console.log(`O nome do cliente é ${cliente["nome"]}, essa pessoa tem ${cliente["idade"]} anos.`);

//como acessar dados que não sabemos o valor do dado ainda

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})

