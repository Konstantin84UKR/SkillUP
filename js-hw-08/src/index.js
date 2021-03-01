import gallery_items from "./gallery-items.js";
import Gallery from './gallery.js';
import BigPicture from './bigPicture.js';

let refs = {
    gallery: document.querySelector('ul.js-gallery'),
    lightbox: document.querySelector('div.js-lightbox'),
    lightbox__image: document.querySelector('.lightbox__image'),
    lightbox__overlay: document.querySelector('.lightbox__overlay'),
    lightbox__button: document.querySelector('button[data-action="close-lightbox"]')
}
refs.gallery.classList.add('gallery');

let gallery = new Gallery(refs.gallery);
gallery.loadItems(gallery_items);
gallery.render();

let bigPicture = new BigPicture(refs, gallery);
gallery.addClick(bigPicture.render.bind(bigPicture));

// // можно и в одной функции конечно
// const KeyDownEvent = function (event) {
//     if (event.keyCode == '27') {
//         this._lightbox.classList.remove('is-open');
//         this._lightbox__image.setAttribute('src', '');
//         document.removeEventListener('keydown', this._addKeyDownEvent);
//     }
// }
// const ArrowLeft = function (event) {
//     if (event.keyCode == '37') {
//         event.preventDefault();
//         let currentItem = parseInt(this._currentItem);
//         currentItem = (currentItem === 0) ? this._gallery._items.length - 1 : --currentItem;
//         this._lightbox__image.setAttribute('src', this._gallery._items[currentItem].original);
//         this._lightbox__image.setAttribute('alt', this._gallery._items[currentItem].description);
//         this._currentItem = currentItem;
//         this._lightbox.classList.add('is-open');
//     }
// }
// const ArrowRight = function (event) {
//     if (event.keyCode == '39') {
//         event.preventDefault();
//         let currentItem = parseInt(this._currentItem); 0
//         currentItem = (currentItem === this._gallery._items.length - 1) ? 0 : ++currentItem;
//         this._lightbox__image.setAttribute('src', this._gallery._items[currentItem].original);
//         this._lightbox__image.setAttribute('alt', this._gallery._items[currentItem].description);
//         this._currentItem = currentItem;
//         this._lightbox.classList.add('is-open');
//     }
// }
// // но так протестил добавление нескольких функций обработчиков
// // bigPicture.addKeyDownEvent(KeyDownEvent);
// // bigPicture.addKeyDownEvent(ArrowLeft);
// // bigPicture.addKeyDownEvent(ArrowRight);


