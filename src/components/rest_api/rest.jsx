import { useEffect, useState } from 'react'
import './rest.css'

const Rest = () => {
	const [user, setUser] = useState({})

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())

			.then(json => setUser(json))
	}, [])

	return (
		<div>
			<h1>2. REST API</h1>
			<p>
				<b>id:</b> {user.userId} <br />
				<b>name:</b> {user.id}
				<br />
				<b>name:</b> {user.title}
				<br />
			</p>
		</div>
	)
}

export default Rest
