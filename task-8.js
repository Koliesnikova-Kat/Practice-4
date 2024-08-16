// Напиши клас Rectangle, який створює об'єкт з властивостями height, width і методом calculateArea() для підрахунку площі прямокутника.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calculateArea() {
    return this.height * this.width;
  }
}

console.log(Rectangle);



const rectangle = new Rectangle(10, 20);

console.log(rectangle.calculateArea());