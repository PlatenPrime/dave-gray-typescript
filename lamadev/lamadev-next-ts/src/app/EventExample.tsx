"use client"
import React from 'react'

function EventExample() {


	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault
		console.log("Search")
	}


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
console.log(e.target.value)
	}


	return (
		<div>
			<form >
				<input type="text" placeholder='Search for anything' onChange={handleChange} />
				<button className='bg-blue-600 p-1' onClick={handleClick} >Search</button>
			</form>
			<form >
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem porro, aut eaque ducimus harum neque quaerat cum sint dolorem ipsam aperiam alias quos at laborum, labore sequi voluptatibus deserunt odit!</p>
				<button className='bg-red-600 p-1' >Delete</button>
			</form>
			<form >
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem porro, aut eaque ducimus harum neque quaerat cum sint dolorem ipsam aperiam alias quos at laborum, labore sequi voluptatibus deserunt odit!</p>
				<button className='bg-red-600 p-1' >Delete</button>
			</form>
		</div>
	)
}

export default EventExample