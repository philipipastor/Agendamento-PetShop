import { fetchDate } from "../../services/busca-data.js";

export async function validarHorario(date,hora){
    
    const agendamentos = await fetchDate({ date })

    //Retorna true se o horário está ocupado e false para horário livre
    const horarioOcupado = agendamentos.some(ag => ag.hora === hora)

    return horarioOcupado

}
