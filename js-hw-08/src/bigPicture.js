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
            this.clickEvent(event);
        });
        this._lightbox__button.addEventListener('click', event => {
            event.preventDefault();
            this.clickEvent(event);
        });
        this._KeyDownEvent = this.KeyDownEvent.bind(this);
    }

    render(event) {
        event.preventDefault();
        this._lightbox__image.setAttribute('src', event.target.dataset.source);
        this._lightbox__image.setAttribute('alt', event.target.dataset.description);
        this._currentItem = event.target.dataset.indexGallery;
        this._lightbox.classList.add('is-open');
        document.addEventListener('keydown', this._KeyDownEvent);
    }

    clickEvent(event) {
        if (event.target == this._lightbox__overlay || event.target == this._lightbox__button) {
            this._lightbox.classList.remove('is-open');
            this._lightbox__image.setAttribute('src', '');
            document.removeEventListener('keydown', this._KeyDownEvent);
        }
    }
    KeyDownEvent(event) {

        if (event.keyCode == '37' || event.keyCode == '39') {
            event.preventDefault();
            let currentItem = parseInt(this._currentItem);

            if (event.keyCode == '37') {
                currentItem = (currentItem === 0) ? this._gallery._items.length - 1 : --currentItem;
            } else if (event.keyCode == '39') {
                currentItem = (currentItem === this._gallery._items.length - 1) ? 0 : ++currentItem;
            }

            this._lightbox__image.setAttribute('src', this._gallery._items[currentItem].original);
            this._lightbox__image.setAttribute('alt', this._gallery._items[currentItem].description);
            this._currentItem = currentItem;
            this._lightbox.classList.add('is-open');
        }

        if (event.keyCode == '27') {
            this._lightbox.classList.remove('is-open');
            this._lightbox__image.setAttribute('src', '');
            document.removeEventListener('keydown', this._KeyDownEvent);
        }
    }
}