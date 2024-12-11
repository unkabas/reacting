import React, { Component } from 'react'

class Clicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clicks: 0, // Инициализация состояния кликов
		}
	}

	// Метод для увеличения количества кликов
	handleClick = () => {
		this.setState(prevState => ({
			clicks: prevState.clicks + 1, // Увеличиваем количество кликов на 1
		}))
	}

	render() {
		return (
			<div>
				<h1>3. Counter</h1>
				<p>Кликов: {this.state.clicks}</p>
				<button onClick={this.handleClick}>Клик</button>
			</div>
		)
	}
}

export default Clicker
