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
        this._items.forEach((item, index) => {

            let item_li = document.createElement("li");
            item_li.classList.add('gallery__item');

            let item_a = document.createElement("a");
            item_a.classList.add('gallery__link');
            item_a.setAttribute('href', item.original);

            let item_img = document.createElement("img");
            item_img.classList.add('gallery__image');
            item_img.setAttribute('src', item.preview);
            item_img.setAttribute('alt', item.description);
            item_img.dataset.source = item.original;
            item_img.dataset.indexGallery = index;

            item_a.append(item_img);
            item_li.append(item_a);
            this._galleryHTML.append(item_li);

        })

    }
    clearGallery() {
        this._galleryHTML.innerHTML = '';
    }
    addClick(handler) {
        this._galleryHTML.addEventListener('click', handler);
    }
}