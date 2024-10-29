// Navigation JS
const navbarToggle = document.querySelector("#navbarToggle");
const mainMenu = document.querySelector('#mainMenu');

if (navbarToggle && mainMenu) {
  navbarToggle.addEventListener('click', () => {
    mainMenu.classList.toggle("show");
    navbarToggle.classList.toggle("close");
  })
}