// Створити класи Library та Book

// Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// author
// title
// price
// totalPages
// currentPage
// Також цей клас буде мати такі методи:

// Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта

class Book {
    constructor(book) {

        const { author, title, price, totalPages, currentPage } = book;

        this.author = author;
        this.title = title;
        this.price = price;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
    }

    read(page) {
        if (this.currentPage + page <= this.totalPages) {
            this.currentPage += page;
        }
    }

    get bookProgres() {
        return Math.round(this.currentPage / this.totalPages * 100);
    }

    set bookProgres(percent) {
        const bookProgres = percent / 100 * this.totalPages;
        if (bookProgres <= this.totalPages) {
            this.currentPage = bookProgres;
        }
    }

}


class Library {

    //#books;
    constructor() {
        this._books = [];
        this._favourite = [];
    }

    get books() {
        return this._books;
    }
    get favourite() {
        return this._favourite;
    }
    buy(book) {
        if (!this._books.includes(book)) {
            this._books.push(book);
        }
    }
    sell(title) {
        const bookOnSellIndex = this._books.findIndex(book => {
            return book.title === title;
        });
        if (bookOnSellIndex >= 0) {
            this._books.splice(bookOnSellIndex, 1);
        }
    }
    addToFavourite(title) {
        if (!this._favourite.includes(value => { return value.title === title })) {  
            const book = this._books.find(value => { return value.title === title });  
            if (book != undefined) {
                this._favourite.push(book);
            }
        }
    }
    removeFromFavourite(title) {
        const bookIndex = this._favourite.findIndex(value => {
            return value.title === title;
        });

        if (bookIndex >= 0) {
            this._favourite.splice(bookIndex, 1);
        }
    }
    get сountFavouriteBooks() {
        return this._favourite.length;
    }
    get finishedBook() {
        const booksFin = this._books.reduce((acc, book) => {
            if (book.totalPages === book.currentPage) {
                return ++acc;
            }
            return acc;
        }, 0);
        return booksFin;
    }
    totalCost() {
        const amountBook = this._books.reduce((acc, book) => {
            return acc + book.price;
        }, 0);
        return amountBook;
    }
}

const bookInstans_1 = new Book({
    author: 'Ник Морган',
    title: 'JavaScript для детей. Самоучитель по программированию',
    price: 502,
    totalPages: 288,
    currentPage: 0
});
const bookInstans_2 = new Book({
    author: 'Марейн Хавербеке',
    title: 'Виразний JavaScript. Сучасне веб-програмування. 3-е видання',
    price: 983,
    totalPages: 480,
    currentPage: 0
});
const bookInstans_3 = new Book({
    author: 'Адитья Бхаргава',
    title: 'Грокаем алгоритми',
    price: 305,
    totalPages: 320,
    currentPage: 0
});
const bookInstans_4 = new Book({
    author: 'Роберт Мартин',
    title: 'Чистий код',
    price: 497,
    totalPages: 464,
    currentPage: 0
});
const bookInstans_5 = new Book({
    author: 'Ерік Фрімен',
    title: 'Патерни проєктування',
    price: 620,
    totalPages: 672,
    currentPage: 0
});

console.log('/-------------------Тест класса BOOK-------------------------------/');
console.log(`Книга ${bookInstans_1.title} Текущая страница ${bookInstans_1.currentPage}`);
console.log('Прочитанно 100 страниц');
bookInstans_1.read(100);
console.log(`Книга ${bookInstans_1.title} Текущая страница ${bookInstans_1.currentPage}`);
console.log('Прочитанно 25 страниц');
bookInstans_1.read(25);
console.log(`Книга ${bookInstans_1.title} Текущая страница ${bookInstans_1.currentPage}`);
console.log('Прочитанно больше страниц чем осталось в книге');
bookInstans_1.read(1111125);
console.log(`Книга ${bookInstans_1.title} Текущая страница ${bookInstans_1.currentPage}`);
console.log(`Книга ${bookInstans_1.title} процент прочитаных страниц ${bookInstans_1.bookProgres}% всего станиц ${bookInstans_1.totalPages}`);
console.log('Прочитанно 50%  от всех страниц');
bookInstans_1.bookProgres = 50;
console.log(`Книга ${bookInstans_1.title} Текущая страница ${bookInstans_1.currentPage}`);

console.log('/-------------------Тест класса Library-------------------------------/');


const computerScienceLibrary = new Library();
console.log('/-------------------Тест buy-------------------------------/');
computerScienceLibrary.buy(bookInstans_1);
computerScienceLibrary.buy(bookInstans_2);
computerScienceLibrary.buy(bookInstans_3);
computerScienceLibrary.buy(bookInstans_1);
console.log(computerScienceLibrary.books);

console.log('/-------------------Тест sell-------------------------------/');
computerScienceLibrary.sell(bookInstans_1.title);

console.log('/-------------------Тест addToFavourite-------------------------------/');
computerScienceLibrary.addToFavourite(bookInstans_3.title);
computerScienceLibrary.addToFavourite(bookInstans_2.title);
computerScienceLibrary.addToFavourite(bookInstans_5.title);
console.log(computerScienceLibrary.favourite);

console.log('/-------------------Тест removeFromFavourite-------------------------------/');
computerScienceLibrary.removeFromFavourite(bookInstans_2.title);
console.log(computerScienceLibrary.favourite);

console.log('/-------------------Тест -------------------------------/');
console.log(`сountFavouriteBooks = ${computerScienceLibrary.сountFavouriteBooks}`);
console.log(`finishedBook = ${computerScienceLibrary.finishedBook}`);
bookInstans_3.bookProgres = 100;
console.log(`finishedBook = ${computerScienceLibrary.finishedBook}`);
console.log(`totalCost = ${computerScienceLibrary.totalCost()}`);



