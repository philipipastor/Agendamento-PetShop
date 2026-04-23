import dayjs from "dayjs"

import { limpaForm } from "./limpa-form.js"
import { horarioOcupado } from "./hours-form/horario-ocupado.js"
import { criaAgendamento } from "../agendamentos/cria-agendamento.js"

const modal = document.querySelector(".modal-overlay")

class ValidaForm{
    constructor(){
        this.formulario = document.querySelector(".form")
        this.eventos()
        this.diasAnteriores()
        }
    
    eventos(){
        
        this.formulario.addEventListener("submit", async (e) => {
            e.preventDefault()
        
            if(this.nomeTutor()) return;
            if(this.nomePet()) return;
            if(this.numTel()) return;
            if(this.service()) return;

            if(await horarioOcupado()) return;

            await criaAgendamento()

            limpaForm(this.formulario)

            modal.classList.add("hidden")

        })  
        
    }

    horarioFuncionamento(){
        const horario = this.formulario.querySelector("#hora")
        if(horarioLivre.includes(horario)){
            alert("teste")
        }
    }

    diasAnteriores(){
        const dataForm = this.formulario.querySelector("#dateForm")
        const today = dayjs(new Date()).format("YYYY-MM-DD")
        dataForm.min = today
    }

    service(){
        const servico = this.formulario.querySelector("#service").value
        if(this.campoNulo(servico, "serviço")) return true

        return false
    }

    numTel(){
        const telefone = this.formulario.querySelector("#telefone").value

        const numero = telefone.replace(/\D/g, "")
        if(this.campoNulo(telefone, "telefone")) return true;

        if(numero.length !== 11){
            alert("O número está incorreto")
            return true
        }

        return false

        //console.log(`(${telefone.slice(0,2)})${telefone.slice(2,7)}-${telefone.slice(7-11)}`);
    }

    nomePet(){
        const namePet = this.formulario.querySelector("#name-pet").value
        if(this.campoNulo(namePet, "nome do pet")) return true 
        return false
    }

    nomeTutor(){
        const nameTutor = this.formulario.querySelector("#name-tutor").value

        if(this.campoNulo(nameTutor,"nome do tutor")) return true;
        
        const regex = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)*$/

        if(!regex.test(nameTutor)){
            alert("O nome do tutor deve conter apenas letras")
            return true
        }
        return false
    }

    campoNulo(campo,nome){

        const valor = campo.trim()
        
        if(!valor){
            alert(`O campo ${nome} está vazio, por favor preencher`)
            return true
        }
        return false;
    }
}

const valida = new ValidaForm

