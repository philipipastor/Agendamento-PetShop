import { fetchDate } from "../../services/busca-data.js";

const dateForm = document.querySelector("#dateForm")

//Seleciona a data no form
dateForm.addEventListener("change", async () => {
    const date = dateForm.value

    const agendamentos = await fetchDate({date})

    //Retorna apenas os horários do meu aquivo json
    const horariosOcupados = agendamentos.map(ag => ag.hora)

    const optionHora = document.querySelectorAll("#hora option")

    optionHora.forEach(option => {
        //se o horário selecionado estiver dentro de horários ocupados, a opção é desligada e é adicionado um ocupado
        if(horariosOcupados.includes(option.value)){
            option.disabled = true
            option.textContent = `${option.value} - ocupado`
        }

        //se o horário selecionado estiver livre, vai continuar normal
        else{
            option.disabled = false
            option.textContent = option.value
        }
    })
})





