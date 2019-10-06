/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение

function isPositive(arg) {
    if (typeof arg !== 'number') {
        return console.log(new Error(`Argument ${arg} is not a number`))
    }

    const result = (arg > 0) ? true : false;
    console.log(result);
    return result;

}

isPositive(-3); // false
isPositive(3); // true
isPositive(0); // 0
isPositive('3'); // Error


exports.isPositive = isPositive;