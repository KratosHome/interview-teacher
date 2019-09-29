/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

'use strict';

const person = {};

const date = new Date();

// Решение
Object.defineProperty(person, 'salary', {
    get() {

        if (date.getDate() <= 11) {
            return `Good salary`;
        } else {
            return `Bad salary`;
        }
    }
});


console.log(`Today date is ${date.getMonth()+1}.${date.getDate()}.${date.getFullYear()}`);

console.log(person.salary);

// exports.person = person;