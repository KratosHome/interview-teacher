/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
*/

// Решение
class DB {
    'use strict';

    #count = null;
    #map = new Map();

    create(obj) {

        if (typeof obj !== 'object') {
            throw new TypeError('Your argument is not an object')
        }

        if (typeof obj.name !== 'string' || typeof obj.age !== 'number' || typeof obj.country !== 'string' || typeof obj.salary !== 'number') {
            throw new TypeError('Object is not valid')
        }

        let id = [this.#count++].toString();
        this.#map.set(id, obj);

        return id;
    }

    read(id) {

        if (!arguments.length) {
            throw new Error('Id of object does not exist');
        }

        if (typeof id !== 'string') {
            throw new Error('Invalide type of id')
        }

        if (!this.#map.has(id)) {
            return null
        }

        this.#map.get(id).id = id;

        return this.#map.get(id);
    }

    // readAll() {
    //     if (arguments.length) {
    //         throw new Error('Does not need an argument');
    //     }

    //     const arrUsers = [];

    //     for (let key of this.#map.values()) {
    //         arrUsers.push(key);
    //     }

    //     return arrUsers;
    // }

    update(id, prop) {
        for (let key in prop) {
            this.#map.get(id)[key] = prop[key];
        }

        return this.#map.get(id);
    }

    delete(id) {
        if (!arguments.length) {
            throw new Error('Id of object does not exist');
        }

        if (typeof id !== 'string') {
            throw new Error('Invalide type of id')
        }

        this.#map.delete(id);
        return true;

    }

    find(query) {
        const setArr = new Set();

        let func = () => {};
        let res = 0;
		
		
		this.#map.forEach((value, key, map) => {
        	let arr = [];
            console.log(key);            
            
            for (let prop in value) {
                	arr.push(comp(value[prop], query[prop]));
                	setArr.add(value);    
         	
            }
       		
       		console.log(arr);                
        });

        
       console.log(setArr);
       
        return setArr;

    }
}

function comp(value, query) {

    if (typeof query === 'object') {

        if (value >= query.min || value <= query.max ||
            (value >= query.min && value <= query.max)) {
            return true
        }else{
        	return false
        }
    } else {
        if (value === query) {
            return true
        }else{
        	return false
        }
    }


}





// Проверка
const query = {
  name:'ME',
  country: "ua",
  age: {
    min: 21,
  },
  salary: {
    min: 300,
    max: 600
  },
};

const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 25, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 400 // обязательное поле с типом number
};

const person2 = {
    name: "ME", // обязательное поле с типом string
    age: 22, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 350 // обязательное поле с типом number
};

const id2 = db.create(person2);
const id = db.create(person);
const customers = db.find(query); // массив пользователей