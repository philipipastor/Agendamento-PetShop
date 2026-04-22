const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function periodo(agendamentoDia){
    
    //Limpa o input a cada momento que é alterada a data
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    //Percorre todos os agedamentos criados
    agendamentoDia.forEach(agenda => {

        //Cria os elementos para ser exebido na tela de agendamento
        const li = document.createElement("li")
        const spanHour = document.createElement("span")       
        const spanPet = document.createElement("span")
        const smallNomeTutor = document.createElement("small")
        const spanService = document.createElement("span")
        const spanRemove = document.createElement("span")
        
        li.setAttribute("data-id", agenda.id)

        //Passa o conteúdo para os elementos 
        spanHour.textContent = agenda.hora
        spanPet.textContent = agenda.nomePet
        smallNomeTutor.textContent = ` / ${agenda.nomeTutor}`
        spanService.textContent = agenda.servico
        spanRemove.textContent = "Remover agendamento"

        //Adiciona classes aos elementos criados
        li.classList.add("item")
        spanHour.classList.add("time")
        spanPet.classList.add("pet")
        spanService.classList.add("service")
        spanRemove.classList.add("remove")

        //Adiciona elementos filhos dentro de outros elementos pai
        spanPet.appendChild(smallNomeTutor)
        li.append(spanHour,spanPet,spanService,spanRemove)

        //Foi criada uma condição para que os agendamentos fosse para seus determinados períodos
        if(agenda.hora >= "09:00"){
            periodMorning.append(li)
        }

        else if(agenda.hora >= "13:00"){
            periodAfternoon.append(li)
        }

        else if(agenda.hora >= "19:00"){
            periodNight.append(li)
        }

    });

}