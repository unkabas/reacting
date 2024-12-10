import { useEffect, useState } from 'react'
import './eventloop.css'

const EventLoop = () => {
	const [seconds, setSeconds] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let timer
		if (isRunning) {
			timer = setInterval(() => {
				setSeconds(prevSeconds => Math.max(prevSeconds - 1, 0))
			}, 1000)
		}
		return () => clearInterval(timer)
	}, [isRunning])

	const handleStart = () => setIsRunning(true)
	const handleStop = () => setIsRunning(false)
	const handleClear = () => {
		setIsRunning(false)
		setSeconds(0)
	}

	return (
		<div>
			<h1>1. EventLoop</h1>
			<p>Секунды: {seconds}</p>
			<div className='timer'>
				<button onClick={() => setSeconds(seconds + 10)}>+10</button>
				<button onClick={() => setSeconds(seconds + 30)}>+30</button>
				<button onClick={() => setSeconds(seconds + 60)}>+60</button>
			</div>
			<button
				onClick={isRunning ? handleStop : handleStart}
				className={isRunning ? 'stop' : 'start'}
			>
				{isRunning ? 'STOP' : 'START'}
			</button>

			<button onClick={handleClear}>CLEAR</button>
		</div>
	)
}

export default EventLoop
