let nav = document.querySelector('.nav-modal')
let navImg = document.querySelector('.nav-img');
let closeButton = document.getElementById('close');
let closeModal = document.getElementById('empty');

function toggleModal() {
   nav.classList.toggle("show-nav");
}
function navClick(event) {
   if(event.target === nav) {
      toggleModal();
   }
}
navImg.addEventListener("click", toggleModal);
//  closeButton.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

