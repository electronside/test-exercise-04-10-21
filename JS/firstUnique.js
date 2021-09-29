// 4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве.
// Пример: console.log(firstUnique([1,2,3,2,1,3,4,5,5]) 
// output 4

const unique = [1, 2, 3, 2, 1, 3, 4, 5, 5]

function firstUnique(value, index, self) {
  return self.filter((item) => item === value).length === 1
}
console.log(unique.filter(firstUnique))

