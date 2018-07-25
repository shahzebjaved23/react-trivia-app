import React, { Component } from 'react'
import './welcomeScreen'
import { Link } from 'react-router-dom'

export class WelcomeScreen extends Component {
	
	render(){
		return (
			<div>
				<h1>Welcome Screen</h1>
				<Link to='/game'><button onClick={this.props.startGame}>Start Game</button></Link>
			</div>
		)
	}

}