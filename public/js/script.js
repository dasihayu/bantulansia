// Scroll
let scrollAwal = window.pageYOffset
window.onscroll = function() {
    const header = document.querySelector('header');
    let scrollAkhir = window.pageYOffset

    if (scrollAwal > scrollAkhir) {
        header.classList.remove('hide-navbar');
        if (window.pageYOffset > 0) {
            header.classList.add('border-b-2')
        } else {
            header.classList.remove('border-b-2')
        }
    } else {
        header.classList.add('hide-navbar');
    }

    scrollAwal = scrollAkhir
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});