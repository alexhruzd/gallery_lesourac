let gallery = document.querySelector('.gallery');
gallery.addEventListener('click', showModal);

let modalWrapper = document.querySelector('.modal_wrapper');
let modal = document.querySelector('.modal_block');

let modalSlider = document.querySelector('.modal_slider');
let modalClose = document.querySelector('.modal_close');


modalClose.addEventListener('click', (e) => {

     modalWrapper.classList.remove('active');
});


function showModal(event) {
     if(event.target.tagName !== ('IMG')) return;
     let numImg = 0;
     let curImg = event.target.closest('div');

     for (let i = 0; i<gallery.children.length; i++) {
          if (curImg === gallery.children[i]) {
               numImg = i;
               break;
          }
     }

     modalWrapper.classList.add('active');

     modalSlider.innerHTML = gallery.innerHTML;
     modalSlider.slider(sliderSettings = {
          slideWidth: 1000,
          autoplay: false,
          dots: false,
          margin: 0
     }, numImg);

     modalSlider.querySelector('.navs').classList.add('modal_navs');
}


