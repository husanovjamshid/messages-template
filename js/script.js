
let CloseBtn = document.querySelector('.author__close');
let heroBtn = document.querySelector('.hero');

CloseBtn.addEventListener('click', function(){
    heroBtn.classList.add('close')
});