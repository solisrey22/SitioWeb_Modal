/* para almacenar referencias a elementos del DOM*/
const closeModal = document.querySelector('.modal__close');
const openModal = document.querySelector('.cta');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault(); //  previene el comportamiento predeterminado del evento de clic, lo que evita que el enlace realice la acción de navegación o que se recargue la página
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});