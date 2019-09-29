/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Если в качестве первого параметра передана не строка — нужно вернуть null.
 */

const PRICE = '$120';
const PRICE2 = 23;
const PRICE3 = '$120.233';
const PRICE4 = '$-120';

// Решение

extractCurrencyValue(PRICE);
extractCurrencyValue(PRICE2);
extractCurrencyValue(PRICE3);
extractCurrencyValue(PRICE4);


function extractCurrencyValue(arg) {
    if (typeof arg !== 'string') {
        console.log('Argument isn\'t a string');
        return;
    }

    let string = arg;
    let val = parseFloat(string.slice(1));


    if(val < 0){
    	console.log('It\'s imposible');
    	return;
    }

    console.log(val);


}

// exports.extractCurrencyValue = extractCurrencyValue;