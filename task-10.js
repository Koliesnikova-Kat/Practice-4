// Створи клас Phone який створює об'єкт з властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається. 
// Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

class Phone {
  #price;

  constructor(price) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Phone.MAX_PRICE) {
      this.#price = newPrice;
    }
  }

  static MAX_PRICE = 40000;
}

const phone = new Phone(30000);
console.log(phone);

console.log(phone.price);

phone.price = 35000;
console.log(phone.price);

phone.price = 45000;
console.log(phone.price);