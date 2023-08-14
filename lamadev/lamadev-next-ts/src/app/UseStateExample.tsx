"use client"
import React, { useEffect, useState } from 'react'


type UserType = {
	name: string;
	id: number;
}




function UseStateExample() {

	const [username, setUsername] = useState<string>("")
	const [user, setUser] = useState<UserType | null>(null)


	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setUser({
			name: username,
			id: Math.random()
		})
	}


	useEffect(
		() => { console.log(user) }, [user]
	)


	return (
		<div>
			{user ? (`${user.name} logged in`) :<form >
				<input type="text" placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }} />
				<button className='bg-green-600 p-1' onClick={handleSubmit} >Login</button>
			</form>}

			{user?.name}
		</div>
	)
}

export default UseStateExample