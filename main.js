const botao_menu = document.querySelector('.cabecalho__menu');
const menu_lateral = document.querySelector('.menu-lateral');

botao_menu.onclick = function () {
    menu_lateral.classList.toggle('menu-lateral--invisivel')
}
