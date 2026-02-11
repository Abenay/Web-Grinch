const menuIcon = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const Icon = document.querySelector('#menu-icon i');

menuIcon.addEventListener( 'click', = () => {
     navlist.classList.toggle('open');
    icon.classList.toggle('ri-menu-line');
     icon.classList.toggle('ri-close-line');
    
});

document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('open');
        icon.classList.add('ri-menu-line');
        icon.classList.remove('ri-close-line');
    });
});

 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
 });
 
 sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.hero-img',{origin:'top', delay:300});
sr.reveal('.icons',{origin:'left', delay:400});
sr.reveal('.scroll-down',{origin:'right', delay:500});
