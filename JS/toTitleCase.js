/*
9. Создайте прототип для String toTitleCase 
каждый первый символ строки переводит в верхний регистр. 

Пример:

let x = 'test task'
console.log(x.toTitleCase())
// Outputs: Test Task

*/
/*
let toTitleCase = (str) => {
  return str
    .toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

let result = toTitleCase('миру мир')
console.log(result) // Mиру Mир 
*/



var str = "миру мир"

function toTitleCase() {}
toTitleCase.prototype = function () {};

toTitleCase.prototype.getX = function () { 
	return str
	    .toLowerCase()
	    .split(' ')
	    .map(word => word.charAt(0)
	    .toUpperCase() + word
	    .slice(1)).join(' ') 
};

var myTitleCase = new toTitleCase(); 
console.log(myTitleCase.getX())

