// 8. Сделать функцию которая сможет делать срез данных с ассоциативного массива 
// и вернуть средние значение (округленное до 2 цифр после запятой)

/*

let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":
{"php":0,"js":-1,"madness":10,"rage":10}},
{"name":"Dima","email":"dima@example.com","age":34,"skills":
{"php":5,"js":7,"madness":3,"rage":2}},
{"name":"Colya","email":"colya@example.com","age":46,"skills":
{"php":8,"js":-2,"madness":1,"rage":4}},
{"name":"Misha","email":"misha@example.com","age":16,"skills":
{"php":6,"js":6,"madness":5,"rage":2}},
{"name":"Ashan","email":"ashan@example.com","age":99,"skills":
{"php":0,"js":10,"madness":10,"rage":1}},
{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":
{"php":0,"js":0,"madness":0,"rage":10}}]

let result2 = array_pluck_avg(testData3, 'skills.php') 

// Outputs: 3.1

*/

/*
var data = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},
  {"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},
  {"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},
  {"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},
  {"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},
  {"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

var sliced = Object.fromEntries(
    Object.entries(data).slice(1, 3)
        // var sliced = JSON.parse(JSON.stringify(data.slice()))
)
console.log(sliced)
*/

/*
var arraySlice = JSON.parse(JSON.stringify(data.slice(0, 3)));

 dataAll = arraySlice.map(entry => 
   Object.entries(entry).reduce(
       (obj, [key, value]) => (obj[key] = parseFloat(value), obj), 
       {}
   )
 ); console.log(dataAll)
*/

// Не хватает понимания как заверить это задание
