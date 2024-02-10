export default () => {

    let gallery_data = {
        group_1: [
            {
                src: '/assets/img/group-1/group-1-1.jpg',
                desc: 'first image'
            },
            {
                src: '/assets/img/group-1/group-1-2.jpg',
                desc: 'second image'
            },
            {
                src: '/assets/img/group-1/group-1-3.jpg',
                desc: 'third image'
            },
            {
                src: '/assets/img/group-1/group-1-4.jpg',
                desc: 'fourth image'
            },
            {
                src: '/assets/img/group-1/group-1-5.jpg',
                desc: 'fifth image'
            },
            {
                src: '/assets/img/group-1/group-1-6.jpg',
                desc: 'sixth image'
            },
        ],
        group_2: [
            {
                src: '/assets/img/group-2/group-2-1.jpg',
                desc: 'first image'
            },
            {
                src: '/assets/img/group-2/group-2-2.jpg',
                desc: 'second image'
            },
            {
                src: '/assets/img/group-2/group-2-3.jpg',
                desc: 'third image'
            },
            {
                src: '/assets/img/group-2/group-2-4.jpg',
                desc: 'fourth image'
            },
            {
                src: '/assets/img/group-2/group-2-5.jpg',
                desc: 'fifth image'
            },
            {
                src: '/assets/img/group-2/group-2-6.jpg',
                desc: 'sixth image'
            },
            {
                src: '/assets/img/group-2/group-2-7.jpg',
                desc: 'seventh image'
            },
            {
                src: '/assets/img/group-2/group-2-8.jpg',
                desc: 'eighth image'
            },
            {
                src: '/assets/img/group-2/group-2-9.jpg',
                desc: 'ninth image'
            },
        ],
        group_3: [
            {
                src: '/assets/img/group-3/group-3-1.jpg',
                desc: 'first image'
            },
            {
                src: '/assets/img/group-3/group-3-2.jpg',
                desc: 'second image'
            },
            {
                src: '/assets/img/group-3/group-3-3.jpg',
                desc: 'third image'
            },
            {
                src: '/assets/img/group-3/group-3-4.jpg',
                desc: 'fourth image'
            },
            {
                src: '/assets/img/group-3/group-3-5.jpg',
                desc: 'fifth image'
            },
            {
                src: '/assets/img/group-3/group-3-6.jpg',
                desc: 'sixth image'
            },
            {
                src: '/assets/img/group-3/group-3-7.jpg',
                desc: 'seventh image'
            },
        ],
        group_4: [
            {
                src: '/assets/img/group-4/group-4-1.jpg',
                desc: 'first image'
            },
            {
                src: '/assets/img/group-4/group-4-2.jpg',
                desc: 'second image'
            },
            {
                src: '/assets/img/group-4/group-4-3.jpg',
                desc: 'third image'
            },
        ],
        group_10: [
            {
                src: '/assets/img/group-10/group-10-1.jpg',
                desc: 'first image'
            },
            {
                src: '/assets/img/group-10/group-10-2.jpg',
                desc: 'second image'
            },
            {
                src: '/assets/img/group-10/group-10-3.jpg',
                desc: 'third image'
            },
            {
                src: '/assets/img/group-10/group-10-4.jpg',
                desc: 'fourth image'
            },
        ],
    };
    
    let gallery = document.getElementById('gallery'),
        zIndex = 50000;

    for (let key in gallery_data) {
        
        // create gallery rows
        let obj = gallery_data[key],
            gallery_item = document.createElement('div'),
            gallery_item_row = document.createElement('div');

        gallery_item.className = 'gallery__item';
        gallery_item.style.zIndex = zIndex--;
        gallery_item_row.className = 'gallery-item__row';
        gallery_item_row.innerHTML = `<div class="gallery-row__progress">
                                        <div class="progress-indicator"></div>
                                      </div>`;

        for (let item in obj) {
            gallery_item_row.innerHTML += `<div class="gallery-row__img" style="background-image: url(${obj[item].src})" ></div>`;
        }
        
        gallery_item.append(gallery_item_row);
        gallery.append(gallery_item);
    }

}