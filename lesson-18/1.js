/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение


class DB {
	#count = null;
	#map = new Map();

    create(obj) {

        if (typeof obj !== 'object') {
            throw new TypeError('Your argument is not an object')
        }

        if (typeof obj.name !== 'string' || typeof obj.age !== 'number' || typeof obj.country !== 'string' || typeof obj.salary !== 'number') {
            throw new TypeError('Object is not valid')
        }

        let id = [this.#count++].toString();
        this.#map.set(id, obj);

        return id;
    }

    read(id) {

        if (!arguments.length) {
            throw new Error('Id of object does not exist');
        }

        if (typeof id !== 'string') {
            throw new Error('Invalide type of id')
        }

        if (!this.#map.has(id)) {
            return null
        }

        this.#map.get(id).id = id;

        return this.#map.get(id);
    }

    readAll() {
        if (arguments.length) {
            throw new Error('Does not need an argument');
        }

        const arrUsers = [];

        for (let key of this.#map.values()) {
            arrUsers.push(key);
        }

        return arrUsers;
    }

    update(id, prop) {
        for (let key in prop) {
            this.#map.get(id)[key] = prop[key];
        }
        return this.#map.get(id);
    }

    delete(id) {
        if (!arguments.length) {
            throw new Error('Id of object does not exist');
        }

        if (typeof id !== 'string') {
            throw new Error('Invalide type of id')
        }

        this.#map.delete(id);
        return true;

    }
}
// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22, country: "us" }); // id
db.delete(id); // true