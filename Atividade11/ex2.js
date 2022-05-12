function Conta(){
    this.nomeCorrentista
    this.banco
    this.numeroConta
    this.saldo

    this.getNomeCorrentista = () => {
        return this.nomeCorrentista
    }

    this.setNomeCorrentista = (nomeCorrentista) => {
        this.nomeCorrentista = nomeCorrentista;
    }

    this.getBanco = () => {
        return this.banco
    }

    this.setBanco = (banco) => {
        this.banco = banco
    }

    this.getNumeroConta = () => {
        return this.numeroConta;
    }

    this.setNumeroConta = (numeroConta) => {
        this.numeroConta = numeroConta;
    }
    this.getSaldo = () => {
        return this.saldo
    }

    this.setSaldo = (saldo) => {
        this.saldo = saldo;
    }
    
}


function ContaCorrente(){
    this.saldoEspecial

    this.getSaldoEspecial = () => {
        return this.saldoEspecial;
    }

    this.setSaldoEspecial = (saldoEspecial) => {
        this.saldoEspecial = saldoEspecial;
    }
}

function ContaPoupanca() {
    this.juros
    this.dataVencimento

    this.getJuros = () => {
        return this.juros;
    }

    this.setJuros = (juros) => {
        this.juros = juros;
    }

    this.getDataVencimento = () => {
        return this.dataVencimento;
    }

    this.setDataVencimento = (dataVencimento) => {
        this.dataVencimento = dataVencimento
    }
}


ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

var contaCorrente = new ContaCorrente();
var contaPoupanca = new ContaPoupanca();

contaCorrente.setSaldoEspecial(100)
contaCorrente.setNomeCorrentista("Joao")

console.log(contaCorrente.getSaldoEspecial())
console.log(contaCorrente.getNomeCorrentista())


contaPoupanca.setNomeCorrentista("Joaozinho")
contaPoupanca.setJuros(8)
contaPoupanca.setDataVencimento("20/03/2000")

console.log(contaPoupanca.getJuros())
console.log(contaPoupanca.getNomeCorrentista())
console.log(contaPoupanca.getDataVencimento())