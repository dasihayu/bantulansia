// Scroll
let scrollAwal = window.pageYOffset;
window.onscroll = function () {
  const header = document.querySelector('header');
  let scrollAkhir = window.pageYOffset;
  const toTop = document.querySelector('#to-top');
  console.log(scrollAwal);
  console.log(scrollAkhir);

  if (scrollAwal > scrollAkhir) {
    header.classList.remove('hide-navbar');
    if (window.pageYOffset > 0) {
      header.classList.add('border-b-2');
    } else {
      header.classList.remove('border-b-2');
    }
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  } else {
    header.classList.add('hide-navbar');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  }

  if (scrollAkhir == 2948) {
    toTop.classList.add('bottom-24');
  }

  scrollAwal = scrollAkhir;
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// tutup hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// map
var map = L.map('map').setView([-6.966667, 110.416664], 13);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([-6.2, 106.816666]).addTo(map);
L.marker([-7.0056359, 110.4547171]).addTo(map).bindPopup('Rela Bakti Wisma').openPopup();
L.marker([-6.9696899, 110.3986637]).addTo(map).bindPopup('Griya Tyas Dalem').openPopup();
L.marker([-6.9649483, 110.3949103]).addTo(map).bindPopup('Panti Jompo Rela Bakti').openPopup();
L.marker([-6.9829032, 110.3694677]).addTo(map).bindPopup('Panti Werdha Elim').openPopup();

// alert
function fitur() {
  alert('Fitur sedang tahap pengembangan');
}
