
const h1 = document.querySelector("h1");
console.log(h1?.textContent);

const title = document.querySelector(".title") as HTMLHeadingElement;
console.log(title?.textContent);

const username = document.querySelector("#username") as HTMLInputElement;
console.log(username.placeholder);

//genericos

function getFirstElement<E>(array: E[]){
    return array[0]
}

const numArray = [10,20,30];
const firstNum = getFirstElement<number>(numArray);
console.log(firstNum);

const strArray = ['a','b','c']
const firstStr = getFirstElement<string>(strArray)

const usernames = document.querySelector<HTMLInputElement>("#username")
