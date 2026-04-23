const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function periodo(agendamentoDia){
    
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""
    
    agendamentoDia.forEach(agenda => {

        const li = document.createElement("li")
        const spanHour = document.createElement("span")       
        const spanPet = document.createElement("span")
        const smallNomeTutor = document.createElement("small")
        const spanService = document.createElement("span")
        const spanRemove = document.createElement("span")
        
        li.setAttribute("data-id", agenda.id)
        
        spanHour.textContent = agenda.hora
        spanPet.textContent = agenda.nomePet
        smallNomeTutor.textContent = ` / ${agenda.nomeTutor}`
        spanService.textContent = agenda.servico
        spanRemove.textContent = "Remover agendamento"

        li.classList.add("item")
        spanHour.classList.add("time")
        spanPet.classList.add("pet")
        spanService.classList.add("service")
        spanRemove.classList.add("remove")

        spanPet.appendChild(smallNomeTutor)
        li.append(spanHour,spanPet,spanService,spanRemove)

        if(agenda.hora >= "09:00"){
            periodMorning.append(li)
        }

        if(agenda.hora >= "13:00"){
            periodAfternoon.append(li)
        }

        if(agenda.hora >= "19:00"){
            periodNight.append(li)
        }

    });

}