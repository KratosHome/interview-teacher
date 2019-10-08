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
'use strickt';
const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение


function filter(arr, func) {

    if (!Array.isArray(arr) || typeof func !== 'function') {
        throw new Error("Some of your argument is not correct")
    }

    for (let i = 0; i < arr.length; i++) {
        filterFunction(arr[i], i, arr);        
    }
}

function filterFunction(element, index, arrayRef) {
  //  console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
}

const filteredArray = filter(array, filterFunction);
console.log(array.filter(filterFunction));


exports.filter = filter;