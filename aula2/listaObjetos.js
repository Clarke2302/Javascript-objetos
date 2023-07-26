// colocar um objeto dentro de outro objeto
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["51 984868302", "55 85947362"],
    
};

cliente.endereços = [{
    rua: "R. Joseph Climber",
    numero: 1134,
    apartamento: true,
    complemento:"ap 945",
}
];

cliente.endereços.push({ //add novo endereço na lista
    rua: "R dos Rossatos",
    numero: 320,
    apartamento: false,
});
//filtrar somente apartamentos
const listaApenasApe = cliente.endereços.filter((endereço)=> endereço.apartamento === true); 


console.log(listaApenasApe); //ou cliente["endereço"]