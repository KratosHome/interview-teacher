/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isEven(arg) {
    if (typeof arg !== 'number') {
        return console.log(new Error(`Argument ${arg} is not a number`))
    }

    const result = (arg % 2 === 0) ? true : false;
    console.log(result);
    return result;

}

isEven(3); // false
isEven(4); // true
isEven(0); // true
isEven('4'); // Error

console.log(typeof isEven(0));

exports.isEven = isEven;