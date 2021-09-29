/*
10. Создайте прототип который удаляет дубликаты из строки. 

Пример:

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
x.removeDuplicate() 

// Int32 Double

*/


function removeDuplicate() {}
removeDuplicate.prototype = function () {};

removeDuplicate.prototype.getStr = function (str) { 
	return str.split('').filter( function (item, position, self) {
     		return self.indexOf(item) == position;
    	}
   ).join('');
}
var str = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"

let myMove = new removeDuplicate(); 
 
console.log(myMove.getStr(str));