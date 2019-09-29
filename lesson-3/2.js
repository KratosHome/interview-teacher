/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение


checkSpam('123string','string'); // true
checkSpam(123,123); // false
checkSpam('123string',123); // false
checkSpam(123,'123string'); // false


function checkSpam(source, example) {
	if (typeof source !== 'string' || typeof example !== 'string') {
        console.log('One of arguments isn\'t a string!');
        return;
    }

    let src = source.toLowerCase();;
    let exmp = example.toLowerCase();

    if(src.includes(exmp)){
    	console.log(true);
    	return true;
    }else{
    	console.log(false);
    	return false;
    }
}
// exports.checkSpam = checkSpam;