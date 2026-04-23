import { validarHorario } from "./valida-horario.js"

const selectDate = document.getElementById("dateForm")

export async function horarioOcupado(){
    const hora = document.getElementById("hora").value

    const date = selectDate.value
    const ocupado = await validarHorario(date,hora)

    if(ocupado){
        alert("Esse horário já está ocupado! Escolha outro")
        return true
    }

    return false
}