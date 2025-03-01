import cliente from "./cliente.js";

export default class Gerente extends cliente{
    
    constructor(nome, email, nascimento, role, status){
        
        super(nome, email, nascimento, 'gerente', status)
         


    }
    
    desativarConta(conta){
        if(this.role!=='gerente'){
            console.log("somente gerentes podem alterar o status de contas")
        }else{
            conta.status = 'desativada'
            console.log("Conta desativada com sucesso") 
        }
    }

    ativarConta(conta){
        if(this.role!=='gerente'){
            console.log("somente gerentes podem alterar o status de contas")
        }else{
            conta.status = 'ativada'
            console.log("Conta ativada com sucesso") 
        }
    }
}