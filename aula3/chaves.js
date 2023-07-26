//objetos não tem uma ordem

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

const chavesDoObjeto = Object.keys(cliente);
//todos os campos do objeto cliente vão se tornar uma array chamada chavesDoObjeto

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereços")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}