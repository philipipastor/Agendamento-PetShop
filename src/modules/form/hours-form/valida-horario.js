import  { fetchDate } from "../../../services/busca-data.js"

export async function validarHorario(date,hora){
    
    const agendamentos = await fetchDate({ date })

    const horarioOcupado = agendamentos.some(ag => ag.hora === hora)

    return horarioOcupado
}
