/* 3. Напишите функцию обертку которая 
на вход принимает асинхронный метод и массив аргументов 
а отдает нам Promise с результатом. Пример:

function asyncPlus(x, y, cb){
	setTimeout(() => cb(x + y), 1000)
}
toPromise(asyncPlus, [1,2]).then(console.log)
// Output: 3

 */

/*

const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3])
        }, 2000)
    })

promise.then(values => {
    console.log(values[2])
})

*/

/*

function testPromise(input) {
    return new Promise(function(resolve, reject) {
        // some async operation here
        setTimeout(function() {
            resolve(input * 10);
        }, 2000);
    });
}

testPromise(20).then(function(val) {
   log(val);
});

function log(x) {
    document.write(x);
}

*/

// До конца не понмаю техеику манипуляции с данными поэтому решил не верно