// Напиши клас Client який створює об'єкт з властивостями login, email.
// Оголоси приватні властивості #login, #email, доступ до яких зроби через геттер та сеттер login email.

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
};

console.log(Client);



const client = new Client('fayna_divka', 'faynadivka@i.ua');

console.log(client);

console.log(client.login);
console.log(client.email);

client.login = 'Koliesnikova_Kat';
client.email = 'koliesnikova.kateryna@gmail.com';

console.log(client.login);
console.log(client.email);

console.log(client);