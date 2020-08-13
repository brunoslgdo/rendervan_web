const showMenu = (iconHamburguerId, menuId) => {
    let iconHamburguer = document.getElementById(iconHamburguerId),
        menu = document.getElementById(menuId);
    if(iconHamburguer && menuId) {
        iconHamburguer.addEventListener('click', () => {
            menu.classList.toggle('hide')
        })
    }
}

const toIconClose = (iconHamburguerId) => {
    let iconHamburguer = document.getElementById(iconHamburguerId);
    if(iconHamburguer) {
        iconHamburguer.addEventListener('click', () => 
            iconHamburguer.classList.toggle('icon-close'))
    }
}

toIconClose('icon-hamburguer')
showMenu('icon-hamburguer', 'menu')