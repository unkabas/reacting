import { useState } from 'react'

const Todo = () => {
	const [todos, setTodos] = useState([])
	const [inputValue, setInputValue] = useState('')

	const handleChange = e => {
		setInputValue(e.target.value)
	}

	const handleAdd = () => {
		if (inputValue.trim() !== '') {
			setTodos([...todos, inputValue])
			setInputValue('')
		}
	}

	const handleDelete = index => {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}

	return (
		<div>
			<h1>Todo</h1>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}
						<button onClick={() => handleDelete(index)}> del</button>
					</li>
				))}
			</ul>
			<div>
				<input type='text' onChange={handleChange} value={inputValue} />
				<button onClick={handleAdd}>Добавить</button>
			</div>
		</div>
	)
}

export default Todo
