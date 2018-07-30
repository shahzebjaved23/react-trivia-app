import React, { Component } from 'react'
import './welcomeScreen.css'

export class WelcomeScreen extends Component {

	startGame(){
		this.props.startGame()
		console.log(this.props.currentQuestion)
		this.props.history.push('/game')
	}

	render(){
		return (
			<div className="welcome-screen">
				<div className="jumbotron">
                    <h1>The Trivia App</h1>
                    <p>A simple trivia application</p>
                </div>
				<h2>Complete the trivia to know test your knowledge and know your score</h2>
				<h3>Can you score a 100%</h3>
				<button className="btn btn-lg btn-success start-game-button" onClick={ this.startGame.bind(this) }>
					Start Game
				</button>
			</div>
		)
	}

}