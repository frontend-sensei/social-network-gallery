export default () => {
    let header_menu_btn = document.getElementById('header_menu_btn'),
        header_content = document.querySelector('.header__content');

    header_menu_btn.addEventListener('click', addFunction);

    function addFunction() {
        header_menu_btn.setAttribute('disabled', 'true');
        header_menu_btn.classList.add('animated');
        header_content.classList.toggle('menu-shown');
        
        setTimeout(() => {
            header_menu_btn.classList.remove('animated');
            header_menu_btn.removeAttribute('disabled');
        }, 500);
        console.log('clicked');
    }
}

