const students = [
    { id: 21, name: 'omar Sunny' },
    { id: 31, name: 'Mannaaaa' },
    { id: 41, name: 'Noyon' },
    { id: 71, name: 'Deepjol' }
]
const names = students.map(names => names.name);
const ids = students.map(ids => ids.id)

const bigger = students.filter(s => s.id > 40);
console.log(bigger);

const biggestOne = students.find(s => s.id > 40);
console.log(biggestOne);