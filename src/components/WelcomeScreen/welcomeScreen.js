import React, { Component } from 'react'
import './welcomeScreen'
import { Link } from 'react-router-dom'

export class WelcomeScreen extends Component {

	startGame(){
		this.props.startGame();
	}

	render(){
		return (
			<div>
				<h1>Welcome Screen</h1>
				<Link to='/game'><button onClick={this.startGame.bind(this)}>Start Game</button></Link>
			</div>
		)
	}

}