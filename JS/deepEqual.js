// Задание
// 1. Напишите функцию deepEqual чтоб она проверяла 
// что два объекта идентичны. Пример:

// deepEqual({name: 'test'}, {name: 'test'}) // output true
// deepEqual({name: 'test'}, {name: 'test1'}) // output false
// deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

/*
function deepEqual(name) {
	var user1 = { name: 'test'}
	var user2 = { name: 'test', age: 10}
	
	if (JSON.stringify(user1) === JSON.stringify(user2)) {
		console.log("Same objects")
	} else {
	    console.log("Not same")
	}
}
deepEqual(); 

*/

const d1 = { name: 'Test', name: 10},
	  d2 = { name: 'Test', name: 10 },
	  d3 = { name: 'Test', name: 'Test', age: 10 }

const deepEqual = (d1, d2) =>
    Object.keys(d1).length === Object.keys(d2).length 
        && Object.keys(d1).every(p => d1[p] === d2[p])
        
console.log(deepEqual(d1, d2)); // true
console.log(deepEqual(d1, d3)); // false
