import dayjs from "dayjs";
import { apiconfig } from "./api-config.js";

export async function fetchDate({date}){
    try {
        const response = await fetch(`${apiconfig.url}/agendamentos`)

        //Pega os dados de todos os agendamentos que já foram feitos
        const data = await response.json()

        //Filtra apenas os dados do agendamento selecionado pela data do input
        const agendamentosDoDia = data.filter((day) => 
            dayjs(date).isSame(day.data, "day"))

        return agendamentosDoDia

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}