// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showlnfo, щоб він логував	про кожний телефон, передаючи аргументом країну-виробника телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

const tel = {
  regNumber: "AE8345£EDAS",
  brand: "HUAWEI",
  showlnfo(country) {
    console.log(`${ country } ${ this.regNumber } ${ this.brand }`);
}
}

const tel_2 = {
  regNumber: "A08518FEGHJ",
  brand: "SAMSUNG",
}

tel.showlnfo('China');
tel.showlnfo.call(tel_2, 'South Korea');
tel.showlnfo.apply(tel_2, ['South Korea']);

const telInfo = tel.showlnfo.bind(tel_2, 'South Korea');
telInfo();