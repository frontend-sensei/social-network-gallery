export default () => {
    
    let gallery_img = document.getElementsByClassName('gallery-row__img'),
        overlay = document.getElementById('overlay_active_img');

    for (let j = 0; j < gallery_img.length; j++) {
        gallery_img[j].addEventListener('click', function() {
            let item = gallery_img[j],
                item_img = getComputedStyle(item).backgroundImage,
                
                overlay_content = document.createElement('div');

            overlay_content.className = 'overlay-active-img__content';            
            showOverlay();

            overlay.prepend(overlay_content);
            overlay_content.style.backgroundImage = item_img;

            overlay_content.addEventListener('touchmove', function(e) {
                e.target.classList.add('slideOut');
                hideOverlay();
            });

            console.log('clicked', item_img);
        });
    }

    // functions
    function showOverlay() {
        overlay.innerHTML = '';
        overlay.classList.remove('hide');
        overlay.classList.add('active');
    }

    function hideOverlay() {
        overlay.classList.remove('active');
        setTimeout(function() {
            overlay.classList.add('hide');
        },600);
    }
    
}

