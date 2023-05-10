const toggleBtn = document.querySelector('.toggle-button');

toggleBtn.addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('toggle-button-is-active');
});
