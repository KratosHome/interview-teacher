/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */

// Решение


function getDivisors(arg) {

    if (typeof arg !== 'number') {
        return console.log(new Error(`Argument ${arg} is not a number`))
    }
    
    if (arg < 1) {
        return console.log(new Error('Argument is less than 1'));
    }

    let arrDivisors = [];

    for (let i = 0; i <= arg; i++) {
        if (arg % i === 0) {
            arrDivisors.push(i);
        }
    }

    console.log(arrDivisors);
    return arrDivisors;
}
getDivisors(12); // [1, 2, 3, 4, 6, 12];
getDivisors(17); // [1, 17];
getDivisors(-17); // Error
getDivisors('string'); // Error
getDivisors(0); // Error

exports.getDivisors = getDivisors;