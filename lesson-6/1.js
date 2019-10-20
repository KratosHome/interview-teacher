/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;done
 * - В качестве второго аргумента была передана не функция.done
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение


function forEach(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error("Your first argument is not array")
    }

    if (typeof func !== 'function') {
        throw new Error("Your second argument is not a function")
    }

    for (let i = 0; i < arr.length; i++) {
		func(arr[i], i, arr);
    }
}

function forEachMethod(element, index, arrayRef) {
    console.log(`${index}:`, element, arrayRef);
}


const result = forEach(array, forEachMethod);
console.log(result); // undefined

const result2 = forEach('array', forEachMethod);
console.log(result2); // undefined

const result3 = forEach(array, 'forEachMethod');
console.log(result3); // undefined



exports.forEach = forEach;