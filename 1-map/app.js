let arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Маша" },
  { id: 3, name: "Маша" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Катя" },
];

function makeSetOfNames(array) {
  const mySet = new Set();
  array.map((elem) => {
    mySet.add(elem.name);
  });
  return mySet;
}

console.log(arr);
console.log(makeSetOfNames(arr));
