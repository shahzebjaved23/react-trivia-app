import React, { Component } from 'react'
import './scoreScreen.css'

export class ScoreScreen extends Component {

	playAgain(){
		this.props.startGame()
		this.props.history.push('/game')
	}

	calculateScore(){
		let scores = this.props.questions.map( (question, index) => {
			let correctAnswer = question.answer === this.props.answers[index.toString()]
			return correctAnswer ? 1 : 0
		})
		let score = scores.reduce( (sum, current) => {
			return sum + current
		})
		return score
	}

	render(){
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

				<h2>Total Score: { this.calculateScore() }</h2>
				<button onClick={this.playAgain.bind(this)}>Play Again</button>
			</div>	
		)
	}

}