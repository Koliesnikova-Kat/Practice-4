// Напишіть стрілочну функцію, яка буде перевіряти, чи всі студенти у нашому масиві старші 18 років.

const students = [
  { name: "Alex", age: 17 },
  { name: "Stas", age: 18 },
  { name: "Mike", age: 22 },
  { name: "Den", age: 20 },
];

const adultStudents = students.every(student => student.age > 18);

console.log(adultStudents);