/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error("Your first argument is not array")
    }

    if (typeof func !== 'function') {
        throw new Error("Your second argument is not a function")
    }

    const transArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(filterMethod(arr[i], i, arr)){
        	transArr.push(arr[i]);
        }
    }
    
    return transArr;
}

function filterMethod(element, index, arrayRef) {
    return element === 'Добрый вечер!';
}

const filteredArray = filter(array, filterMethod);

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;