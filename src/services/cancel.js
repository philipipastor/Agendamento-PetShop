import { apiconfig } from "./api-config"

export async function deleteAgendamento({id}){

    try {
        await fetch(`${apiconfig.url}/agendamentos/${id}`,{
            method: "DELETE",
    })

        alert("Agendamento deletado com sucesso")
    } catch (error) {

        console.log(error)
        alert("Não foi possível remover seu agendamento")
    }
}

