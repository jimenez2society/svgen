class Shape {
  constructor(shape, text, fill, textColor) {
    this.shape = shape;
    this.text = text;
    this.fill = fill;
    this.textColor = textColor;
  }
  setText(text) {
    this.text = text;
  }
  setColor(color) {
    this.fill = color;
  }
  setTextColor(color) {
    this.textColor = color;
  }
  render() {
    switch (this.shape) {
      case "circle":
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.fill}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
      case "triangle":
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
      default:
        return null;
    }
  }
}

class Circle extends Shape {
  constructor() {
    super("circle");
  }
}
class Triangle extends Shape {
  constructor() {
    super("triangle", "TEXT");
  }
}
module.exports = { Circle, Triangle };
// module.exports.shapes = (shape, text, fill, textColor) => {
//   switch (shape) {
//     case "circle":
//       return `<svg
//     version="1.1"
//     width="300"
//     height="200"
//     xmlns="http://www.w3.org/2000/svg"
// >
//     <circle cx="150" cy="100" r="80" fill="${fill}" />

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
//       ${text}
//     </text>
// </svg>`;
//   }
// };
