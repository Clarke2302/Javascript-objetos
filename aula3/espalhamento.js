//ligar para cliente
//aparecer seu numero

//enviar encomenda para cliente

//Usamos o Spread Operator (...)

const cliente = {
    nome: "Fifi",
    idade: 23,
    email: "fifi@gmail.com",
    telefone: ["51 984868302", "55 85947362"],
    
};

cliente.endereços = [{
    rua: "R. Joanna Darque",
    numero: 134,
    apartamento: true,
    complemento:"ap 512",
}
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereços[0],
    
}

console.log(encomenda);