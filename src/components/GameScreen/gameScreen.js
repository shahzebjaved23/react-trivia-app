import React, { Component } from 'react'
import './gameScreen.css'

export class GameScreen extends Component {

	getCurrentQuestion(){
		return this.props.questions[this.props.currentQuestion]
	}

	// Add conditions button to go to next question, or to the score screen
	// On CONDITION -> this.props.currentQuestion + 1 > state.questions.length

	render(){
		return (
			<div>
				<h1>Game Screen</h1>
			</div>	
		)
	}

}
