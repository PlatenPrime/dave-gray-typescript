"use client"

import React, { useEffect, useRef } from 'react'

function UseRefExample() {

	const focusRef = useRef<HTMLInputElement>(null)
	const usernameRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		focusRef.current?.focus()
	}, [])


	const handleClick = () => {
		console.log(`user is ${usernameRef.current?.value}`)
	}

	return (
		<div className='flex flex-col ' >
			<input className='text-black' type="text" placeholder="focus here" ref={focusRef} />
			<input className='text-black' type="text" placeholder="username" ref={usernameRef} />
			<button onClick={handleClick} >Send</button>
		</div>
	)
}

export default UseRefExample