/*
# Задача 4

Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

У класса `Countries` должен быть один метод `send` который должен возвращать промис.

А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

**Обратите внимание**:

1. Метод `send` должен возвращать промис.
2. Использование `async & await` внутри класса **запрещено**.
3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${statusCode}`
6. Генерировать ошибку если `url` по типу не строка.
7. Генерировать ошибку если методу `send` передать по типу не число.

**В результате такой код должен работать**:
*/

const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

// код вірний -----------------------------

class Countries {

    constructor(url) {

        if (typeof url !== 'string') {
            throw new Error('It\` not an api')
        }
        this.api = url;
    }

    send(size) {

        if (typeof size !== 'number') {
            throw new Error('it\` is not a valid param')
        }

        const promise = new Promise((resolve, reject) => {
            const url = this.api + `?size=${size}`;

            get(url, (error, meta, body) => {

                const statusCode = meta.status;

                if (statusCode === 200) {
                    const { data } = JSON.parse(body);
                    resolve(data);

                }

                reject(`We have error, status code: ${statusCode}`)

            });

        });


        return promise;
    }


}

// Решение

const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(3);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();
