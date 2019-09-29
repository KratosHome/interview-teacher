/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '21');
truncate(21, '21');
truncate(21, 21);
truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', -4);
truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 9);

function truncate(string, maxLength) {
    if (typeof string !== 'string' ||
        typeof maxLength !== 'number' ||
        typeof maxLength !== 'number' && typeof string !== 'string') {

        console.log('Some of arguments isn\'t a string');
        return;
    }

    let str = string;
    let max = maxLength;

    if (max === 0 || max < 0 || str.length < max) {
        console.log(`Something wrong`);
        return;
    }

    if(str.length === max){
        console.log(str);
    }

    if (str.length > max) {
        console.log(`${str.slice(0, str.length - max)}...`); 
    }


}
// exports.truncate = truncate;