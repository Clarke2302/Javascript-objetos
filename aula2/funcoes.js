//funçao juntamente com objeto
//usar dados de cliente para ver seu saldo

//objeto atual se usa this
const cliente = {
    nome: "Juliana",
    idade: 25,
    email: "jujuba@furious.com",
    telefone: ["51 984868302", "55 85947362"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor>this.saldo){
            console.log("Saldo insuficiente!");
        }else{
            this.saldo -= valor;
            console.log(`"Compra efetuada. Novo Saldo: ${this.saldo}`);
        }
    }
};
cliente.efetuaPagamento(25);
