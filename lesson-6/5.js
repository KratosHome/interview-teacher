/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(arr, func, accumulator) {
    if (!Array.isArray(arr)) {
        throw new Error("Your first argument is not array")
    }

    if (typeof func !== 'function') {
        throw new Error("Your second argument is not a function")
    }

    let acc = accumulator || arr[0];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result = reduceFunction(acc, arr[i], i, arr);
        acc = result;
    }

    return result
}


function reduceFunction(accumulator, element, index, arrayRef) {
    return accumulator + element;
}

const result = reduce(
    array,    
    reduceFunction,   
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

// exports.reduce = reduce;