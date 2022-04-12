const burgerButton = document.querySelector('.burger-button');
const headerMenu = document.querySelector('.header__menu');
if (burgerButton) {
    burgerButton.addEventListener('click', toggleHandler);
}

function toggleHandler() {
    document.body.classList.toggle('_lock');
    burgerButton.classList.toggle('burger-button_pushed');
    headerMenu.classList.toggle('header__menu_emerged');
}


const menuLinks = document.querySelectorAll('.header__nav-item-text[data-goto]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick(e) {
    e.preventDefault();
    const menuLinkGoto = e.target.dataset.goto;
    const gotoSection = document.querySelector(menuLinkGoto);
    const gotoSectionValue = gotoSection.getBoundingClientRect().top + window.scrollY - 10;

    if (burgerButton && headerMenu.classList.contains('header__menu_emerged')) {
        toggleHandler();
    }

    window.scrollTo({
        top: gotoSectionValue,
        behavior: 'smooth'
    })
}