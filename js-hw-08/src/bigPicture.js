export default class BigPicture {
    constructor(refs, gallery) {

        this._gallery = gallery;
        this._lightbox = refs.lightbox;
        this._lightbox__image = refs.lightbox__image;
        this._lightbox__overlay = refs.lightbox__overlay;
        this._lightbox__button = refs.lightbox__button;
        this._currentItem = null;
        this._this = this;
        this._lightbox__overlay.addEventListener('click', event => {
            event.preventDefault();
            this.clickEvent();
        });
        this._lightbox__button.addEventListener('click', event => {
            event.preventDefault();
            this.clickEvent();
        });
    }

    render(event) {
        event.preventDefault();
        this._lightbox__image.setAttribute('src', event.target.dataset.source);
        this._lightbox__image.setAttribute('alt', event.target.dataset.description);
        this._currentItem = event.target.dataset.indexGallery;
        this._lightbox.classList.add('is-open');
    }
    // вариант #1 функция обработчик реализована как метод класса
    clickEvent() {
        if (event.target == this._lightbox__overlay || event.target == this._lightbox__button) {
            this._lightbox.classList.remove('is-open');
            this._lightbox__image.setAttribute('src', '');
        }
    }
    // вариант #2 функция обработчик передаеться параметром
    addKeyDownEvent(handler) {
        document.addEventListener('keydown', handler.bind(this));
    }
}