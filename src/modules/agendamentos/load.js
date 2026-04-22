import { periodo } from "./exibir-agendamento.js"
import { fetchDate } from "../../services/busca-data.js"

const selectDate = document.querySelector("#date")

export function eventoData() {
    //Ao selecionar a data, os agendamentos são exibidos na tela
    selectDate.addEventListener("change", async () => {
        //Pega o valor do input da data selecionada
        const date = selectDate.value

        //Chama a nossa requisão com os dados dos agendamentos do dia selecionado
        const dadosAgendamento = await fetchDate({ date })
        console.log(dadosAgendamento)

        //Passa esses dados para a função criada para mostrar os dados na tela
        periodo(dadosAgendamento)
    })
}

eventoData()
