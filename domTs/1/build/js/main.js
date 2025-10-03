"use strict";
const h1 = document.querySelector("h1");
console.log(h1?.textContent);
const title = document.querySelector(".title");
console.log(title?.textContent);
const username = document.querySelector("#username");
console.log(username.placeholder);
//genericos
function getFirstElement(array) {
    return array[0];
}
const numArray = [10, 20, 30];
const firstNum = getFirstElement(numArray);
console.log(firstNum);
const strArray = ['a', 'b', 'c'];
const firstStr = getFirstElement(strArray);
