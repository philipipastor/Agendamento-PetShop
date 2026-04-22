export function getFormData(formulario) {
    return {
        nome: formulario.querySelector("#name-tutor").value,
        nomePet: formulario.querySelector("#name-pet").value,
        telefone: formulario.querySelector("#telefone").value,
        servico: formulario.querySelector("#service").value,
        data: formulario.querySelector("#dateForm").value,
        hora: formulario.querySelector("#hora").value
    }
}
