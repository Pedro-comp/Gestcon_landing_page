
const aplicar_estilos = () => {
    const largura_tela = window.matchMedia('(max-width: 440px)')

    const logo_gestcon = document.getElementById('logo-gestcon');
    const logo_gestcon_mobile = document.getElementById('logo-gestcon-mobile');
    const nome_gestcon = document.getElementById('nome-gestcon-mobile');
    const nav_menu = document.getElementById('nav-header-menu');
    const entrar_button = document.getElementById('entrar-button');
    const menu_icon = document.getElementById('menu-icon')

    if (largura_tela.matches) {
        logo_gestcon.classList.add('hide');
        nav_menu.classList.add('hide');
        entrar_button.classList.add('hide');
        logo_gestcon_mobile.classList.remove('hide');
        nome_gestcon.classList.remove('hide');
        menu_icon.classList.remove('hide');
    } 
    else {
        logo_gestcon.classList.remove('hide');
        nav_menu.classList.remove('hide');
        entrar_button.classList.remove('hide');
        logo_gestcon_mobile.classList.add('hide');
        nome_gestcon.classList.add('hide');
        menu_icon.classList.add('hide');
    }

}

aplicar_estilos();

window.addEventListener('resize', aplicar_estilos)

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "18rem";
}
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}