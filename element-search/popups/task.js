const modalMain = document.getElementById("modal_main");
modalMain.classList.add('modal_active'); 

const modalClose = Array.from(document.querySelectorAll("div.modal__close"));

modalClose.forEach((p) => {
    p.onclick = function() {
        p.closest('.modal').classList.remove('modal_active');
    }
})

function successHndlr () {
    const list = Array.from(document.querySelectorAll('.modal'));
    list.forEach ((p) => {
        if (p.id == "modal_success") {
            modalMain.classList.remove('modal_active'); 
            p.classList.add('modal_active');
        }
    })
}

const showSuccess = document.querySelector(".show-success");

showSuccess.onclick = successHndlr;





