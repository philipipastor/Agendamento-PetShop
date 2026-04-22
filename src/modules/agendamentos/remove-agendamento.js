import { deleteAgendamento } from "../../services/cancel.js"

const lista = document.querySelectorAll(".period")

lista.forEach(element => {
    
    element.addEventListener("click", async (e) =>{
        
        if(e.target.classList.contains("remove")){

            const item = e.target.closest("li")

            const {id} = item.dataset
            
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    await deleteAgendamento({id})
                    item.remove()
                }
            }
            
        }
    })
    
});


 
