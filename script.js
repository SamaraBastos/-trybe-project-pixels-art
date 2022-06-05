const black = document.getElementById('black');
const brown = document.getElementById('brown');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');
const pixelBoard = document.querySelector('#pixel-board');

function clicar(evento) {
  const selecionar = document.querySelector('.selected');
  selecionar.classList.remove('selected');
  evento.target.classList.add('selected');
}

black.addEventListener('click', clicar);
yellow.addEventListener('click', clicar);
brown.addEventListener('click', clicar);
pink.addEventListener('click', clicar);

function pixels(event) {
  const changeColor = document.querySelector('.selected');
  event.target.style.backgroundColor = changeColor.id;
}
pixelBoard.addEventListener('click', pixels);

const clear1 = document.getElementById('clear-board');
const clear2 = document.getElementsByClassName('pixel');

function clik() {
  for (let i = 0; i < clear2.length; i += 1) 
  clear2[i].style.backgroundColor = 'white';
}

clear1.addEventListener('click', clik);
