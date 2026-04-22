import { apiconfig } from "./api-config.js";

export async function agendamento(nomeTutor,nomePet,telefone,servico,data,hora){
    try {
        await fetch(`${apiconfig.url}/agendamentos`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeTutor,
                nomePet,
                telefone,
                servico,
                data,
                hora
            })
        })
        
        alert("Agendamento realizado")   
             
    } catch (error) {
        console.log(error)
        alert("Tente novamente, não foi possível concluir o agendamento")
    }

}   