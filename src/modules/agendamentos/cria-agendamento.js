import { agendamento } from "../../services/agendamento-novo.js";

const nome = document.querySelector("#name-tutor")
const nomePet = document.querySelector("#name-pet")
const telefone = document.querySelector("#telefone")
const servico = document.querySelector("#service")
const data = document.querySelector("#dateForm")
const hora = document.querySelector("#hora")

export async function criaAgendamento(){
    await agendamento(nome.value,nomePet.value,telefone.value,servico.value,data.value,hora.value)
}