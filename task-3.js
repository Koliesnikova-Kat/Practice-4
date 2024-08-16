// Напиши функцію, котра приймає масив користувачів і id. У масиві користувачів потрібно знайти людину з заданим id і повернути його ім'я.
// Якщо користувача не було знайдено, функція повертає повідомлення "Користувача з таким id не знайдено"

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

const neededUser = (array, id) => {
  const user = array.find(el => el.id === id);
  if (user) {
    return user.name;
  } else {
    return 'Користувача з таким id не знайдено';
  }  
};

console.log(neededUser(users, 3));