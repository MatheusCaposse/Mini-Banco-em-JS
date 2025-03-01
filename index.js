import cliente from "./cliente.js"
import Gerente from "./gerente.js"

const Matheus = new cliente("Matheus Caposse", "matheus@gmail.com", "20-02-2006")

const Fernando = new cliente("Fernando", "Fernando@gmail.com", "02-09-2005" )

const EduardoGerente = new Gerente("Eduardo Batista", "eduardo@gmail.com", "27-08-1992")

EduardoGerente.desativarConta(Matheus)

console.log(Matheus.informacao())

EduardoGerente.ativarConta(Matheus)

console.log(Matheus.informacao())

Matheus.deposito(0)

Matheus.saque(20)

Matheus.transferencia(40, Victoria)



