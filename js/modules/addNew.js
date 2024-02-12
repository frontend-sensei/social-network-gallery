export default () => {
    let add_btn = document.getElementById('add_new');

    add_btn.addEventListener('click', addFunction);

    function addFunction() {
        add_btn.classList.toggle('active');
    }
}

