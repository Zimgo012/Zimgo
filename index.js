

const menu = document.querySelector('nav ul');
const toggleMenuOn = document.querySelector('#menuButton');
const toggleMenuOff = document.querySelector('#menuExitButton');

toggleMenuOn.addEventListener('click', () => {
    menu.classList.add('open');
});

toggleMenuOff.addEventListener('click', () => {
    menu.classList.remove('open');
});


//Header darkening
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerOverlay = document.querySelector('.header-overlay');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        headerOverlay.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        headerOverlay.classList.remove('scrolled');
    }
});


//Hero introduction animation
window.addEventListener('load', function() {
    document.querySelector('.introduction p').classList.add('animate');
});



//tech animation
document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelectorAll('.tech');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 550) {
               element.forEach(element => {
                   element.classList.add('animate');
               })
            }
        })
})

//clears out the form every refresh

window.onload = function () {
    document.querySelector('.contact-form-section').reset();
}

