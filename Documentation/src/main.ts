import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript sdfsf</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)




function printName(obj: { first: string, last?: string }): void {



	console.log(obj.last?.toUpperCase());



}


printName({ first: "Platen", last: "Prime" })
printName({ first: "Platen" })
printName({ first: "Jacob", last: "Kane" })



interface PrintIdObject {
	myId: number
}


function printId(id: number | string | PrintIdObject) {
	// console.log("Your ID is: " + id);
	// console.log(id.toUpperCase());
	if (typeof id === "string") {
		// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	} else if (typeof id === "object") {

		console.log(id.myId)

	} else {
		// Here, id is of type 'number'
		console.log(id);
	}
}
// OK
printId(101)
printId("202");
printId({ myId: 23234 })




function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
	  // Here: 'x' is 'string[]'
	  console.log("Hello, " + x.join(" and "));
	} else {
	  // Here: 'x' is 'string'
	  console.log("Welcome lone traveler " + x);
	}
  }


  welcomePeople(["Platen", "Prime"])



  // Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
	console.log(x.slice(0, 3));
  }


  getFirstThree([1, 2, 3, 4, 5, 6, 7])
  getFirstThree("ldjfgd")



  type Test = {
	x: number;
	y: number;
  };


  function printCoord(pt: Test) {
	console.log(pt.x)
	console.log(pt.y)
  }


  printCoord({x: 25, y: 25})


  type NS = number | string

  
