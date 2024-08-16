// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен, перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

const names = ['Ivan', 'Maria', 'Anna'];

const sayHi2 = (names) => names.map(name => `${name} привіт!`);

console.log(sayHi2(names));