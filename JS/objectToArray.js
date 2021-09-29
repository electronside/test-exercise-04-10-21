/* 7. Написать обратный метод (см. задачу 5) objectToArray который из объекта создаст массив
  Пример: 

  objectToArray({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
})

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

*/

/*
var arr = [{'name', 'developer'} {'age', 5}, {'skills', {{'html',4}, {'css', 5}, {'js',5}}}]

function arrayToObject() {
    console.log(Object.entries(arr));
}
arrayToObject()
*/

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

function arrayToObject() {
    console.log(Object.assign(...arr.map(a => ({[a[0]]: a[1]}) )))
}
arrayToObject()

var out = [].concat(...arr.map(Object.values));
console.log(out);