let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () =>{

    setTimeout(()=> {
        
        logoSpan.forEach((span, idx) =>{
            setTimeout(() => {
                span.classList.add('fadein');
          }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove('fadein');
                    span.classList.add('fadeout');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    },)
})