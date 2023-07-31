"use strict"

console.log("hello world")

function greet(person: string, date: Date): void {
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("John", new Date());

let arrNumber: number[] = [1, 2];
let arrNumber2: Array<string> = ["1", "2"];

const myName: string = "Platen";


function greetNew(name: string): void {
	console.log("Hello, " + name.toUpperCase() + "!!");
}

greetNew("John")


function double(num: number): number {
	return num * 2;
}

const palletSome = (pallet: { position: string, pieces: string }): void => {
	console.log(pallet.position)
	console.log(pallet.pieces)
}