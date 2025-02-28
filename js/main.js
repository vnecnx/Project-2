// JS scripts placed here

// Note to Quinton: I'd normally delete this but I'd like to keep it here hidden in case I wanna reference it later down the line
// const logotxt = document.querySelector('.logo-txt');
// console.log('.logo-txt', logotxt)
// logotxt.textContent = 'Hello world'
// logotxt.innerHTML = '<p>New HTML Content</p>'
// logotxt.setAttribute('class','logo-txt-new')

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('offcanvas-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});
