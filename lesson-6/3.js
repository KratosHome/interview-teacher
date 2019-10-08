/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(arr, func) {
    if (!Array.isArray(arr) || typeof func !== 'function') {
        throw new Error("Some of your argument is not correct")
    }

    for (let i = 0; i < arr.length; i++) {
    	return everyFunction(arr[i], i, arr);
    }

}

function everyFunction(element, index, arrayRef) {
    // console.log(`${index}:`, element, arrayRef);
    
    return typeof element === 'number';
}

const result = every(array, everyFunction);
console.log(result); // true



// exports.every = every;