export default class Gallery {
    constructor(galleryHTML) {

        this._items = [];
        this._original = null;
        this._galleryHTML = galleryHTML;

    }
    // принимает массив структур перезаписывая текущую галлерею
    loadItems(items) {
        this._items = [];
        items.forEach(item => {
            this._items.push(item);
        });
    }

    render() {
        this.clearGallery();
        for (let index = 0; index < this._items.length; index++) {

            let item_li = document.createElement("li");
            item_li.classList.add('gallery__item');

            let item_a = document.createElement("a");
            item_a.classList.add('gallery__link');
            item_a.setAttribute('href', this._items[index].original);

            let item_img = document.createElement("img");
            item_img.classList.add('gallery__image');
            item_img.setAttribute('src', this._items[index].preview);
            item_img.setAttribute('alt', this._items[index].description);
            item_img.dataset.source = this._items[index].original;
            item_img.dataset.indexGallery = index;

            item_a.append(item_img);
            item_li.append(item_a);
            this._galleryHTML.append(item_li);
        }
    }

    clearGallery() {
        this._galleryHTML.innerHTML = '';
    }

    addClick(handler) {
        this._galleryHTML.addEventListener('click', handler);
    }
    // addItems(item) {
    //     this._items.push(item);
    // }
    // renderItem(item) {
    //     this.addItems(item);
    // }
}