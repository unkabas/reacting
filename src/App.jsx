import './App.css'
import Counter from './components/counter/counter.jsx'
import EventLoop from './components/eventloop/eventloop.jsx'
import Rest from './components/rest_api/rest.jsx'
const App = () => {
	return (
		<div>
			<h1>THIS IS HOW I LEARN JS AND REACT</h1>
			<EventLoop />
			<Rest />
			<Counter />
		</div>
	)
}

export default App
