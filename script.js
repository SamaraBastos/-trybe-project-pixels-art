
function recebeClik (evento){
    let pixelsClicaveis = document.querySelector('.selected')
    pixelsClicaveis.classList.remove('selected');
    evento.target.classList.add('selected');
}       
let colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', recebeClik);