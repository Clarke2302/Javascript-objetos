// colocar um objeto dentro de outro objeto
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["51 984868302", "55 85947362"],
    
};

cliente.endereço = {
    rua: "R. Joseph Climber",
    numero: 1134,
    apartamento: true,
    complemento:"ap 945",
};
console.log(cliente);
console.log(cliente.endereço); //ou cliente["endereço"]