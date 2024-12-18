// Navigation JS
const navbarToggle = document.querySelector("#navbarToggle");
const mainMenu = document.querySelector('#mainMenu');

if (navbarToggle && mainMenu) {
  navbarToggle.addEventListener('click', () => {
    mainMenu.classList.toggle("show");
    navbarToggle.classList.toggle("close");
  })
}

// Tab Js------
document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tab-link");
	const tabContents = document.querySelectorAll(".tab-content");
	const tabImages = document.querySelectorAll(".tab-img");

	// Toggle active class
	function toggleActiveClasses(activeIndex, ...elements) {
		elements.forEach((elementArrs) => {
			elementArrs.forEach((element) => element.classList.remove("active"));
			elementArrs[activeIndex].classList.add("active");
		});
	}

	// Tab click eventListener
	tabs.forEach((tab, index) => {
		tab.addEventListener("click", (e) => {
			e.preventDefault();
			toggleActiveClasses(index, tabs, tabContents, tabImages);
		});
	});
});