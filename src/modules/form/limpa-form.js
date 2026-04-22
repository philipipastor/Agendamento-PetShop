export function limpaForm(formulario) {
    const data = formulario.querySelector("#dateForm").value
    
    formulario.reset()

    formulario.querySelector("#dateForm").value = data
}