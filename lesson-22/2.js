/*
# Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.
*/

// Решение


function getCustomers(arr1, arr2) {
    return new Promise((resolve, reject) => {
        let ident ;

        let obj = {};
        let needArr1=[];
        // let needArr2=[];

        arr1.forEach((el) =>{
            console.log(el.id);
            if(el.hasOwnProperty('verified')) {
                // console.log(el);
                needArr1.push(el);
                ident = el.id
            }

            
        });

        arr2.find((elem) => {
            try{
                if(elem.id === ident && el.hasOwnProperty('verified')){
                    needArr1.push(elem)
                }
            }catch{
                if(elem.id === ident){
                    resolve(`We don't have information about country for this customer: ${elem}`)
                }
            }
            

            
        });

        console.log(needArr1);
        resolve(Object.assign({}, ...needArr1))


    })
}



// Пример использования

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    },
    {
        id: 'A3',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa',
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
