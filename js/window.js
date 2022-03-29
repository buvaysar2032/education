const openPopUp = document.getElementById('open__pop__up');
const closePopUp = document.getElementById('pop__up__close');
const popUp = document.getElementById('pop__up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

const cancelLation = document.getElementById('cancellation');
cancelLation.addEventListener('click', () => {
    popUp.classList.remove('active');
})
