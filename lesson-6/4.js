/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.some использовать запрещено.
 * 
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода some (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
function some(arr, func) {

    if (!Array.isArray(arr)) {
        throw new Error("Your first argument is not array")
    }

    if (typeof func !== 'function') {
        throw new Error("Your second argument is not a function")
    }

    let result = new Boolean();


    for (let i = 0; i < arr.length; i++) {
        if (someFunction(arr[i], i, arr)) {
            return true;
        } else {
            result = false;
        }
    }

    return result;

}

function someFunction(element, index, arrayRef) {
    return typeof element === 'string';
}

const result = some(array, someFunction);

console.log(result); // true

// exports.some = some;