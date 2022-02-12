const modalBtn = document.querySelector(".btn-modal");
const modalContent = document.querySelector(".modal-content");
const modalDismiss = document.querySelector(".modal-dismiss");

modalBtn.addEventListener("click", () => {
    modalContent.classList.add("show");
})

modalDismiss.addEventListener("click", () => {
    modalContent.classList.remove("show");
})