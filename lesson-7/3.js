/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(val, arrLength) {
    if (!Array.isArray(val) && typeof val !== 'number' && typeof val !== 'string' && typeof val !== 'object') {
        throw new Error("Your first argument is not valid value(Can be array, string, number or object)")
    }

    if (typeof arrLength !== 'number') {
        throw new Error("Your second argument is not a number");
    }

    const value = val;
    const transArr = [];

    for (let i = 0; i < arrLength; i++) {
        transArr.push(value);
    }

    return transArr
}



let id = Symbol("id");

// const result = createArray(id, 5);
const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;