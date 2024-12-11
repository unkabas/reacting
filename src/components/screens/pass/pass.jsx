import { useState } from 'react'

const Pass = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(8)

	const handleChange = e => {
		setLength(e.target.value)
	}

	const handleClick = () => {
		const possibleSymbols =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%^&*()_+-=[]{}|;:,.<>/?'

		let password = ''
		for (let i = 0; i < length; i++) {
			password += possibleSymbols.charAt(
				Math.floor(Math.random() * possibleSymbols.length)
			)
		}

		setPassword(password)
	}

	return (
		<div>
			<h1>4. Password generation</h1>
			<p>
				Length: <input type='number' value={length} onChange={handleChange} />
			</p>

			<button onClick={handleClick}>Generate password</button>
			<p>Password: {password}</p>
		</div>
	)
}

export default Pass
