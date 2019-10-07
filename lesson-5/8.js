/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f(arg) {
    if (Array.isArray(arg) !== true) {
        return console.log(new Error('Argument isn\'t an array'))
    }

    if (arg.length === 0) {
        return console.log(new Error('Argument is empty'))
    }

    const arr = arg;

    if (arr.length === 0) {
        return;
    } else {
        const removed = arr.splice(0, 1);
        console.log(removed[0]);
        return f(arr);

    }

}

f([1, 2, 3, 4, 5, 8]);
f('[1, 2, 3]');
f([]);

exports.f = f;