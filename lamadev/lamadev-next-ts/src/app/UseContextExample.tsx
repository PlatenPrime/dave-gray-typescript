"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'

function UseContextExample() {

	const { state, dispatch } = useContext(ThemeContext)


	console.log(state)

	return (
		<div>
			<button onClick={() => { dispatch({ type: "CHANGE_THEME" }) }} >Change Theme</button>
			<button onClick={() => { dispatch({ type: "CHANGE_FONTSIZE", payload: 32 }) }} >Change Font Size</button>
		</div>
	)
}

export default UseContextExample;