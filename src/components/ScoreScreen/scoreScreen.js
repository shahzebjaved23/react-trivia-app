import React, { Component } from 'react'
import './scoreScreen.css'

export class ScoreScreen extends Component {

	playAgain(){
		this.props.startGame()
		this.props.history.push('/game')
	}

	calculateScore(){
		let scores = this.props.questions.map( (question, index) => {
			let correctAnswer = question.correct_answer === this.props.answers[index.toString()]
			return correctAnswer ? 1 : 0
		})
		let score = scores.reduce( (sum, current) => sum + current )
		return score
	}

	render(){
		return (
			<div className="container" style={{ backgroundColor: "#eeeeee" }}>
				<h1 style={{ textAlign: 'center' }}>Your Score</h1>
				<table className="table" style={{ width:"100%" }} >
					<thead>
						<tr>
							<th>Num #</th>
							<th>Question</th> 
							<th>Given Answer</th>
							<th>Correct Answer</th>
						</tr>
					</thead>
					
					
					<tbody>
						{
							Object.keys(this.props.answers).map( questionNum => {
								return (
									<tr className="score-row" style={{ backgroundColor: this.props.answers[questionNum] == this.props.questions[questionNum].correct_answer ? '#c3e6cb' : '#f5c6cb' }} key={ questionNum }>
										<td className="score-data">{ parseInt(questionNum) + 1 }</td>
										<td className="score-data">{ this.props.questions[questionNum].question }</td>
										<td className="score-data">{ this.props.answers[questionNum].toString() }</td>
										<td className="score-data">{ this.props.questions[questionNum].correct_answer.toString() }</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				

				<h2 style={{ textAlign: "center"}}>Total Score: { this.calculateScore() } / { this.props.questions.length }</h2>
				<button className="btn btn-lg btn-success play-again-button" onClick={this.playAgain.bind(this)}>Play Again</button>
			</div>	
		)
	}

}