export default () => {
    
    let gallery_items = document.getElementsByClassName('gallery-item__row'),

        gallery_row_scrollLeft,
        gallery_row_scrollLeftPrev = 0,
        gallery_row_scrollWidth;

    for(let j = 0; j < gallery_items.length; j++) {
        gallery_items[j].addEventListener('scroll', function(e) {
            let el = e.target,
                scrollWidth = el.scrollWidth,
                progress = el.querySelector('.progress-indicator');

            scrollWidth -= window.innerWidth;

            getScrollDirection(el, progress, scrollWidth);
        })
    }

    function getScrollDirection(e, progress, scrollWidth) {
        gallery_row_scrollLeft = e.scrollLeft;

        // set percents
        progress.style.height = `${ 100 * gallery_row_scrollLeft / scrollWidth }%`;
        
        // to right
        if ( gallery_row_scrollLeft > gallery_row_scrollLeftPrev ) {
            console.log('to right'); 
        } 
        // to left
        else if ( gallery_row_scrollLeft < gallery_row_scrollLeftPrev ) {
            console.log('to left');
        }
        
        gallery_row_scrollLeftPrev = gallery_row_scrollLeft;
    }

}