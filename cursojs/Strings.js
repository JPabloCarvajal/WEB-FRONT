// To find the length of a string, use the built-in length property:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// But strings can also be defined as objects with the keyword new:
let x = "John";

// Comparing two JavaScript objects always returns false.

//Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
let texto = `Hello World!`;

//Template Strings allow interpolation of expressions in strings:
let firstName = "John";
let lastName = "Doe";

let texta = `Welcome ${firstName}, ${lastName}!`;

//HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;