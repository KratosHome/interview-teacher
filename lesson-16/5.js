/**
 * Задача 6.
 *
 * Реализуйте класс Student , который наследует от класса User.
 * 
 * Класс User должен обладать следующими свойствами:
 * - firstName — имя;
 * - lastName — фамилия;
 * - getName() — метод, который возвращает имя и фамилию пользователя.
 * 
 * Класс Student должен обладать следующими свойствами:
 * - year — год поступления в вуз;
 * - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).
 * 
 * Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
 * Текущий год получите самостоятельно.
 * 
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - В реализации работы метода getCourse обязательно использовать конструктор Date.
 */

// Решение

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getName() {
        return `${this.name} ${this.surname}`
    }
}

class Student extends User {
    constructor(name, surname, course) {
        super(name, surname);
        this.course = course;
    }

    getCourse() {
        //да, я запарилась :D

        const date = new Date(this.course);
        const actualDate = new Date();

        let course = actualDate.getFullYear() - date.getFullYear();

        if (course > 5) {
            return 'You already have a diploma'
        }

        if (actualDate.getMonth() + 1 > 9) {
            course++;
        }

        return course;
    }
}

const student = new Student('Water', 'White', '09.01.2016');

console.log(student.getName()); // Walter White
console.log(student.getCourse()); // 4

exports.User = User;
exports.Student = Student;