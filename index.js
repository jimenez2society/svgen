// const { shapes } = require("./lib/shapes");
const inquirer = require("inquirer");
const { readFile, writeFile } = require("fs");
const { Circle, Triangle } = require("./lib/shapes");
const circle = new Circle();
const tri = new Triangle();
const createShape = (obj, text, color, textColor) => {
  obj.setText(text);
  obj.setColor(color);
  obj.setTextColor(textColor);
  return obj.render();
};
let inq = inquirer.createPromptModule();

inq([
  {
    name: "shape",
    type: "input",
    message: "Enter a shape",
  },
  {
    name: "message",
    type: "input",
    message: "Enter a message",
  },
  {
    name: "bgColor",
    type: "input",
    message: "Enter a background color",
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color",
  },
]).then((data) => {
  writeSvg(
    data.message,
    createShape(
      data.shape === "circle" ? circle : tri,
      data.message,
      data.bgColor,
      data.textColor
    )
  );
});

// console.log(createShape(circle, "CIR", "black", "red"));
const writeSvg = (fileName, data) => {
  writeFile(`${__dirname}/examples/${fileName}.svg`, data, (err) => {
    console.log(err);
  });
};

// let name = "CGJ";
// // let data = shapes("circle", name, "black", "white");
// writeSvg("PIG", createShape(circle, "CIR", "black", "red"));
