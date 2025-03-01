//intro to the website

    let intro = document.querySelector('.intro');
    let logo = document.querySelector('.intro-header');
    let logoSpan = document.querySelectorAll('.intro-text');

    window.addEventListener('DOMContentLoaded', () =>{

        setTimeout(()=> {
            
            logoSpan.forEach((span, idx) =>{
                setTimeout(() => {
                    span.classList.add('fadein');
            }, (idx + 1) * 300)
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx)=>{
                    setTimeout(() => {
                        span.classList.remove('fadein');
                        span.classList.add('fadeout');
                    }, (idx + 1) * 50);
                });
            }, 1300);

            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 1500);
        },)
    })