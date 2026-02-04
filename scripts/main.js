const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active'); // animate burger
  menu.classList.toggle('active');   // show/hide menu

  // toggle scroll
  document.body.classList.toggle('no-scroll', menu.classList.contains('active'));
});
