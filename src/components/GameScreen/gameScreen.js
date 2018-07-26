import React, { Component } from 'react'
import './gameScreen.css'

export class GameScreen extends Component {

	componentWillMount(){
		if(this.props.currentQuestion == null){
			this.props.history.push('/')
		}
	}

	getCurrentQuestion(){
		const question = this.props.questions[this.props.currentQuestion]
		return question ? question : null 
	}

	addCurrentAnswerAndNext(currentAnswer){
		this.props.addAnswer({ questionNum: this.props.currentQuestion, questionAns: currentAnswer})
		this.toNextQuestionOrScore()
	}

	toNextQuestionOrScore(){
		const gameOver = this.props.currentQuestion + 1 > (this.props.questions.length - 1)
		gameOver ? this.props.history.push('/score') : this.props.toNextQuestion()
	}

	render(){
		return (
			<div className="container" style={{ paddingTop: 130 }}>
				<div className="jumbotron">
					<h1>No # { this.props.currentQuestion + 1 } : { this.getCurrentQuestion().question }</h1>
					<p>{ this.props.questions[this.props.currentQuestion].category } | { this.props.questions[this.props.currentQuestion].subcategory }</p>
				</div>

				<div className="row">
					<div className="col-md-6">
						<button onClick={() => this.addCurrentAnswerAndNext(true) } className="btn btn-lg btn-success answer-button">True</button>
					</div>
					<div className="col-md-6">
						<button onClick={() => this.addCurrentAnswerAndNext(false) } className="btn btn-lg btn-warning answer-button">False</button>	
					</div>
				</div>

			</div>	
		)
	}

}
