 export default class cliente{
    #nome
    #email
    #nascimento
    #saldo
    #role
    #status

    static contadorContas = 0

    constructor(nome, email, nascimento, role = 'cliente', status = 'ativa'){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#saldo = 0
        this.#role = role
        this.#status = status

        cliente.contadorContas++
    }

    get nome(){
        return`${this.#nome}`
    }

    get email(){
        return `${this.#email}`
    }

    get nascimento(){
        return`${this.#nascimento}`
    }

    get saldo(){
        return this.#saldo;
    }

    get role(){
        return this.#role
    }

    get status(){
        return this.#status
    }

    informacao(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.status}`
    }

    set status(novoStatus) { 
        this.#status = novoStatus;
    }

    atualizarSaldo(valor){
        this.#saldo += valor;
    }

    deposito(valor){
        if (this.status!=='ativada'){
            console.log("Sua conta esta desativada e não pode fazer isso")
        } else if(valor<=0){
            console.log("Você nao pode fazer deposito com valor negativo ou nulo") 
        } else {
            this.atualizarSaldo(valor)
            console.log(`Deposito no valor de R$${valor} realizado com sucesso`)
        }
    }

    saque(valor){
        if(valor===0){
            console.log("Você nao pode realizar saques de valores igual a R$0")
        } else if(valor>this.#saldo){
            console.log(`Você não pode realizar saques maiores que o valor presente na conta bancaria`)
        } else if (this.status!=='ativada'){
            console.log("Sua conta esta desativada e não pode fazer isso") 
        }else {
            this.atualizarSaldo(-   valor)
            console.log(`Saque no valor de R$${valor} foi realizado com sucesso, agora seu saldo é R$${this.#saldo}`)
        }
    }

    transferencia(valor, conta){
        if (this.status!=='ativada'){
            console.log("Sua conta esta desativada e não pode fazer isso")
        } else if(valor<=0 || valor>this.#saldo){
            console.log(`A sua transferência no valor de R$${valor} deu erro pois você esta tentando realizar uma transfêrencia maior nque seu saldo bancario ou o valor é nulo ou negativo`)
        }else {
            this.atualizarSaldo(-valor)
            conta.atualizarSaldo(valor)
            console.log(`A tranferênia no valor de R$${valor}, foi realizada com sucesso, agora seu saldo éR$${this.#saldo}`)
        }
    }   

}   
    