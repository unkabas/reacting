import { useNavigate } from 'react-router-dom'

const layout = () => {
	const navigate = useNavigate()
	return (
		<div>
			<h1>JS and React</h1>
			<button
				onClick={() => {
					navigate('/eventloop')
				}}
			>
				Timer
			</button>
			<button
				onClick={() => {
					navigate('/counter')
				}}
			>
				Clicker
			</button>
			<button
				onClick={() => {
					navigate('/pass')
				}}
			>
				Password generator
			</button>
			<button
				onClick={() => {
					navigate('/rest')
				}}
			>
				REST API
			</button>
			<button
				onClick={() => {
					navigate('/todo')
				}}
			>
				TODO
			</button>
		</div>
	)
}

export default layout
