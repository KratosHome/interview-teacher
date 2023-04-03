/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение


function getCustomers(arr1, arr2) {
    return new Promise((resolve, reject) => {
        /*
            Код має кілька проблем та не відповідає умовам задачі.


         */
        let ident;

        let obj = {};
        let needArr1 = [];
        // let needArr2=[];

        arr1.forEach((el) => {
            // Відсутність перевірки на наявність властивості verified зі значенням true
            console.log(el.id);
            if (el.hasOwnProperty('verified')) {
                // console.log(el);
                needArr1.push(el);
                ident = el.id
            }


        });
        /*
        Використання Array.prototype.find() некоректно
        оскільки це не враховує випадки, коли verified встановлено на true
        краще використати filter або forEach


        Використання try-catch некоректне, оскільки воно зайве у даному контексті
         */
        arr2.find((elem) => {
            try {
                if (elem.id === ident && el.hasOwnProperty('verified')) {
                    needArr1.push(elem)
                }
            } catch {
                if (elem.id === ident) {
                    resolve(`We don't have information about country for this customer: ${elem}`)
                }
            }


        });

        console.log(needArr1);
        resolve(Object.assign({}, ...needArr1))
        /*
        Об'єкти з масиву needArr1 об'єднуються в один об'єкт з допомогою Object.assign().
        Замість цього, вам потрібно додавати об'єкти в масив результатів.
        needArr1 - некоректна назва
        Видалити лишні console.log

         const result = [];
         */


    })
}


// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    },
    {
        id: 'A3',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa',
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
