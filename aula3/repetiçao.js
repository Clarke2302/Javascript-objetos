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

for(let campo in cliente){ //colocamos os campos em uma variavel let
    let tipo = typeof cliente[campo];
    if(tipo !== "object"&& tipo !== "function"){
    console.log(`O campo ${campo} tem o valor ${cliente[campo]}.`);
    }
    
}