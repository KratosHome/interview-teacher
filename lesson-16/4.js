/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение


function capitalLetter(str) {
    const uppLetter = str.charAt(0).toUpperCase();
    const other = str.slice(1);

    return uppLetter + other;
}

class Stringer {
    reverse(val) {
        const arr = val.split('');
        const newArr = arr.reverse().join('');
        return newArr;
    }

    uppercaseFirst(val) {
        return capitalLetter(val);
    }

    uppercaseAll(val) {
        const words = val.split(' ');
        const newArr = [];

        words.forEach((el) => {
            newArr.push(capitalLetter(el));
        });

        return newArr.join(' ');
    }


}
const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;