let header_menu_btn = document.getElementById("header_menu_btn"),
  header_content = document.querySelector(".header__content");

header_menu_btn.addEventListener("click", addFunctionHeader);

function addFunctionHeader() {
  header_menu_btn.setAttribute("disabled", "true");
  header_menu_btn.classList.add("animated");
  header_content.classList.toggle("menu-shown");

  setTimeout(() => {
    header_menu_btn.classList.remove("animated");
    header_menu_btn.removeAttribute("disabled");
  }, 500);
  console.log("clicked");
}

let gallery_data = {
  group_1: [
    {
      src: "./assets/img/group-1/group-1-1.jpg",
      desc: "first image",
    },
    {
      src: "./assets/img/group-1/group-1-2.jpg",
      desc: "second image",
    },
    {
      src: "./assets/img/group-1/group-1-3.jpg",
      desc: "third image",
    },
    {
      src: "./assets/img/group-1/group-1-4.jpg",
      desc: "fourth image",
    },
    {
      src: "./assets/img/group-1/group-1-5.jpg",
      desc: "fifth image",
    },
    {
      src: "./assets/img/group-1/group-1-6.jpg",
      desc: "sixth image",
    },
  ],
  group_2: [
    {
      src: "./assets/img/group-2/group-2-1.jpg",
      desc: "first image",
    },
    {
      src: "./assets/img/group-2/group-2-2.jpg",
      desc: "second image",
    },
    {
      src: "./assets/img/group-2/group-2-3.jpg",
      desc: "third image",
    },
    {
      src: "./assets/img/group-2/group-2-4.jpg",
      desc: "fourth image",
    },
    {
      src: "./assets/img/group-2/group-2-5.jpg",
      desc: "fifth image",
    },
    {
      src: "./assets/img/group-2/group-2-6.jpg",
      desc: "sixth image",
    },
    {
      src: "./assets/img/group-2/group-2-7.jpg",
      desc: "seventh image",
    },
    {
      src: "./assets/img/group-2/group-2-8.jpg",
      desc: "eighth image",
    },
    {
      src: "./assets/img/group-2/group-2-9.jpg",
      desc: "ninth image",
    },
  ],
  group_3: [
    {
      src: "./assets/img/group-3/group-3-1.jpg",
      desc: "first image",
    },
    {
      src: "./assets/img/group-3/group-3-2.jpg",
      desc: "second image",
    },
    {
      src: "./assets/img/group-3/group-3-3.jpg",
      desc: "third image",
    },
    {
      src: "./assets/img/group-3/group-3-4.jpg",
      desc: "fourth image",
    },
    {
      src: "./assets/img/group-3/group-3-5.jpg",
      desc: "fifth image",
    },
    {
      src: "./assets/img/group-3/group-3-6.jpg",
      desc: "sixth image",
    },
    {
      src: "./assets/img/group-3/group-3-7.jpg",
      desc: "seventh image",
    },
  ],
  group_4: [
    {
      src: "./assets/img/group-4/group-4-1.jpg",
      desc: "first image",
    },
    {
      src: "./assets/img/group-4/group-4-2.jpg",
      desc: "second image",
    },
    {
      src: "./assets/img/group-4/group-4-3.jpg",
      desc: "third image",
    },
  ],
  group_10: [
    {
      src: "./assets/img/group-10/group-10-1.jpg",
      desc: "first image",
    },
    {
      src: "./assets/img/group-10/group-10-2.jpg",
      desc: "second image",
    },
    {
      src: "./assets/img/group-10/group-10-3.jpg",
      desc: "third image",
    },
    {
      src: "./assets/img/group-10/group-10-4.jpg",
      desc: "fourth image",
    },
  ],
};

let gallery = document.getElementById("gallery"),
  zIndex = 50000;

for (let key in gallery_data) {
  // create gallery rows
  let obj = gallery_data[key],
    gallery_item = document.createElement("div"),
    gallery_item_row = document.createElement("div");

  gallery_item.className = "gallery__item";
  gallery_item.style.zIndex = zIndex--;
  gallery_item_row.className = "gallery-item__row";
  gallery_item_row.innerHTML = `<div class="gallery-row__progress">
                                  <div class="progress-indicator"></div>
                                </div>`;

  for (let item in obj) {
    gallery_item_row.innerHTML += `<div class="gallery-row__img" style="background-image: url(${obj[item].src})" ></div>`;
  }

  gallery_item.append(gallery_item_row);
  gallery.append(gallery_item);
}

let gallery_items = document.getElementsByClassName("gallery-item__row"),
  gallery_row_scrollLeft,
  gallery_row_scrollLeftPrev = 0,
  gallery_row_scrollWidth;

for (let j = 0; j < gallery_items.length; j++) {
  gallery_items[j].addEventListener("scroll", function (e) {
    let el = e.target,
      scrollWidth = el.scrollWidth,
      progress = el.querySelector(".progress-indicator");

    scrollWidth -= window.innerWidth;

    getScrollDirection(el, progress, scrollWidth);
  });
}

function getScrollDirection(e, progress, scrollWidth) {
  gallery_row_scrollLeft = e.scrollLeft;

  // set percents
  progress.style.height = `${(100 * gallery_row_scrollLeft) / scrollWidth}%`;

  // to right
  if (gallery_row_scrollLeft > gallery_row_scrollLeftPrev) {
    console.log("to right");
  }
  // to left
  else if (gallery_row_scrollLeft < gallery_row_scrollLeftPrev) {
    console.log("to left");
  }

  gallery_row_scrollLeftPrev = gallery_row_scrollLeft;
}

let gallery_img = document.getElementsByClassName("gallery-row__img"),
  overlay = document.getElementById("overlay_active_img");

for (let j = 0; j < gallery_img.length; j++) {
  gallery_img[j].addEventListener("click", function () {
    let item = gallery_img[j],
      item_img = getComputedStyle(item).backgroundImage,
      overlay_content = document.createElement("div");

    overlay_content.className = "overlay-active-img__content";
    showOverlay();

    overlay.prepend(overlay_content);
    overlay_content.style.backgroundImage = item_img;

    overlay_content.addEventListener("touchmove", function (e) {
      e.target.classList.add("slideOut");
      hideOverlay();
    });

    console.log("clicked", item_img);
  });
}

// functions
function showOverlay() {
  overlay.innerHTML = "";
  overlay.classList.remove("hide");
  overlay.classList.add("active");
}

function hideOverlay() {
  overlay.classList.remove("active");
  setTimeout(function () {
    overlay.classList.add("hide");
  }, 600);
}

let add_btn = document.getElementById("add_new");

add_btn.addEventListener("click", addFunction);

function addFunction() {
  add_btn.classList.toggle("active");
}
