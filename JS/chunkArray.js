// 2. Напишите функцию chunkArray которая разбивает массив 
// на подмассивы на заданное количество элементов. 
// Пример: var result = chunkArray([1,2,3,4,5,6,7,8], 3)
// Outputs : [ [1,2,3] , [4,5,6] , [7,8] ]


/* пример 1

function chunkArray() {
	let arr = [0,1,2,3,4,5,6,7,8]
	let result = []
		while (arr.length) 
  		result.push(arr.splice(0, 2), arr.splice(0, 3))
	console.log(JSON.stringify(result))
}
chunkArray()

*/

/* пример 2

function chunkArray() {
	let array = [1,2,3,4,5,6,7,8]
    let array_size = 3
    let sliced_array = []

	for (let i = 0; i <array.length; i += array_size) {
    	sliced_array.push(array.slice(i, i + array_size))
	}
	return console.log(sliced_array)
}
chunkArray()

*/


function chunkArray(arr, count) {
    const result = []
    for (let x = 0, y = count; x < arr.length; x += count, y += count)
        result.push(arr.slice(x, y))
    return result
}
console.log(chunkArray([1,2,3,4,5,6,7,8], 3))
