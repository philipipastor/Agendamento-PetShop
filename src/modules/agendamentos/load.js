import { periodo } from "./exibir-agendamento.js"
import { fetchDate } from "../../services/busca-data.js"

const selectDate = document.querySelector("#date")

export function eventoData() {
    
    selectDate.addEventListener("change", async () => {
       
        const date = selectDate.value

        const dadosAgendamento = await fetchDate({ date })
        
        periodo(dadosAgendamento)
    })
}

eventoData()
