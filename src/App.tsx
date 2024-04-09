import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

	const message: string = "Hello World!";


	message.toLowerCase();
	// Calling 'message'
	message();



	const user = {
		name: "Daniel",
		age: 26,
	};
	user.location;




	function fn(x) {
		return x.flip();
	}



	const announcement: string = "Hello World!";

	// How quickly can you spot the typos?
	announcement.toLocaleLowercase();
	announcement.toLocalLowerCase();

	// We probably meant to write this...
	announcement.toLowerCase();






	function flipCoin() {
		// Meant to be Math.random()
		return Math.random() < 0.5;

	}


	const value = Math.random() < 0.5 ? "a" : "b";
	if (value !== "a") {
		// ...
	} else if (value === "b") {
	
		// Oops, unreachable
	  }

















	return (
		<>


		</>
	)
}

export default App
