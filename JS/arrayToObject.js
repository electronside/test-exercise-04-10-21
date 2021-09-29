// 5. Напишите метод arrayToObject который возвращать объект (использовать рекурсию)
// Пример: var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
/*

console.log(arrayToObject(arr)) 
// Outputs: {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}

*/

/*

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

function arrayToObject() {
	return Object.assign({}, arr)
}
console.log(arrayToObject(arr)) 

*/

/*

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

function arrayToObject(arr){
    return  JSON.parse(JSON.stringify(arr))
}
console.log(arrayToObject(arr)) 

*/

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]]

function arrayToObject() {
    console.log(Object.assign(...arr.map(a => ({[a[0]]: a[1]}) )))
}
arrayToObject()
