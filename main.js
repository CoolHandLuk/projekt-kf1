const arrow = document.querySelector('.header__user__icon-dropdown');
const details = document.querySelector('.header__user__dropdown');

arrow.addEventListener('click', ()=>{
details.classList.toggle('active');
})