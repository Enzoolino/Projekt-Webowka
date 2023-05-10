const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggleBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('mobile-menu-is-active');
});
