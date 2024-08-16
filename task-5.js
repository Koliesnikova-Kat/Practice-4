// Маємо масив об'єктів, який представляє список товарів і їх цін. Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

const products = [
  { name: "Milk", price: 20 },
  { name: "Bread", price: 10 },
  { name: "Eggs", price: 15 },
];

const total = products.filter(product => product.price > 10)
                      .reduce((acc, product) => acc + product.price, 0);

console.log('total:', total);