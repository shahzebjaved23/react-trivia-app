import React, { Component } from 'react'
import './scoreScreen.css'

export class ScoreScreen extends Component {

	playAgain(){
		this.props.startGame()
		this.props.history.push('/game')
	}

	render(){
		console.log(this.props.answers)
		return (
			<div>
				<h1>Score Screen</h1>
				{ Object.keys(this.props.answers).map( questionNum => {
					return (
						<li key={ questionNum }>
							question { parseInt(questionNum) + 1 }: { this.props.questions[questionNum].question }
							<br/>
							Answer Given: { this.props.answers[questionNum].toString() }
							<br/>
							Correct Answer: { this.props.questions[questionNum].answer.toString() }
						</li>
					)
				})}
				<button onClick={this.playAgain.bind(this)}>Play Again</button>
			</div>	
		)
	}

}