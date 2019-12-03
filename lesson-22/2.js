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
function objCompare(id, obj1, obj2) {

    if(obj1 === obj2){
        return true;
    }

    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    if(obj1 )

    return obj1.id === obj2.id
}

function getCustomers(arr1, arr2) {
    return new Promise((resolve, reject) => {

        let obj = [...arr1, ...arr2];
        let id ;
        let needed = obj.filter((el) => {
            if(el.hasOwnProperty('verified') ) {

                id = el.id;

                return el;
            }

        });

    
        let final = Object.assign({}, ...arr5);
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
