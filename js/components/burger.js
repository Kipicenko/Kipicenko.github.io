const burgerMenu = document.querySelector('.burger');
if (burgerMenu) {
	const navMenu = document.querySelector('.nav');
	burgerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock--scroll');
		burgerMenu.classList.toggle('burger--cross');
		navMenu.classList.toggle('nav--active');
	});
}


