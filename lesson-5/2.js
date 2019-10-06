/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение


function f(arg) {

    let argum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return new Error(`Argument ${arguments[i]} is not a number`)
        }

        argum += arguments[i];
    }

    return argum;
}

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9
console.log(f(1, 12)); // 2
console.log(f(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 25
console.log(f(1, 2, 3, '4', 5, 6, 7, 8, 9)); // Error
console.log(f()); // 0


exports.f = f;