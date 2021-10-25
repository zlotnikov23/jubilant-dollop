const button = document.querySelector('#burger');
const menu = document.querySelector('#menu');
let isMenuVisible = false;

button.addEventListener('click', () => {
	menu.style.display = isMenuVisible ? 'none' : 'block';
	isMenuVisible = !isMenuVisible;
});

window.addEventListener("resize", () => {
	menu.style.display = 'none';
	isMenuVisible = false;
}, false);
