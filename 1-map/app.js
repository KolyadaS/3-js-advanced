/* Необходимо уникализировать массив, 
содержащий объекты с идентичными идентификаторами 
(например, ID1, ID2, повторно ID1), удаляя 
повторяющиеся идентификаторы.*/

let arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 1, name: "Маша" },
  { id: 3, name: "Катя" },
];
console.log(arr);

const myMap = new Map();
const mySet = new Set();

arr.map((elem) => {
  if (!myMap.has(elem.id)) {
    myMap.set(elem.id, elem.name);
    mySet.add(elem.name);
  }
});
console.log(myMap);
console.log(mySet);
