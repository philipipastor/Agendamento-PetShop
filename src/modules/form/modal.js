const btnAgenamento = document.getElementById("openModal")
const modal = document.querySelector(".modal-overlay")
const closeModal = document.querySelector(".close-modal")

btnAgenamento.addEventListener("click", () =>{
    modal.classList.remove('hidden')
})

closeModal.addEventListener("click", () =>{
    modal.classList.add("hidden")
})

