"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library{
    #books;
    constructor(arrayBooks){
        if (Library.findRepeats(arrayBooks)) {
            throw Error('В библиотеке есть одинаковые книги')
        }
        this.#books = arrayBooks;
    }

    /**
     * Поиск дубликатов в массиве
     * @param {Array} arrayBooks 
     * @returns {boolean}
     */
    static findRepeats(arrayBooks){
        const setBooks = new Set(arrayBooks);
        return !(setBooks.size === arrayBooks.length);
    }

    get allBooks(){
        return this.#books;
    }

    addBooks(title){
        if (this.hasBook(title)){
            throw Error ('Эта книга уже добавлена в библиотеку')
        }
        this.#books.push(title);
    }

    removeBook(title){
        const index = this.#books.findIndex(element => element === title);
        if (index === -1){
            throw Error ('Эта книга отсутствует в библиотеке')
        }
        this.#books.splice(index, 1);
    }

    hasBook(title){
        return this.#books.includes(title);
    }
}

const duplicate = ['Земля Санникова', 'Остров доктора Моро', 'Записки из Мертвого дома', 'Мертвым не больно', 'Записки из Мертвого дома'];
const withoutDuplicate = ['Земля Санникова', 'Остров доктора Моро', 'Записки из Мертвого дома', 'Мертвым не больно'];

// const libraryError = new Library(duplicate); //Error: В библиотеке есть одинаковые книги
const library = new Library(withoutDuplicate);
console.log(library.allBooks); 

// library.addBooks('Земля Санникова'); //Error: Эта книга уже добавлена в библиотеку
library.addBooks('Господа Головлевы');
console.log(library.allBooks);

// library.removeBook('Сердца трех'); //Error: Эта книга отсутствует в библиотеке
library.removeBook('Мертвым не больно');
console.log(library.allBooks);

console.log(library.hasBook('Остров доктора Моро'));
console.log(library.hasBook('Мертвым не больно'));