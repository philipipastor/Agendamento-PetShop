import { periodo } from "./exibir-agendamento.js"
import { fetchDate } from "../../services/busca-data.js"

const selectDate = document.querySelector("#date")

export async function atualizaAgendamento(){
    const date = selectDate.value

    const dadosAgendamento = await fetchDate({ date })
        
    periodo(dadosAgendamento)
}
    
selectDate.addEventListener("change", async () => {
       await atualizaAgendamento()
})


