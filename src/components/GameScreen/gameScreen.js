import React, { Component } from 'react'
import './gameScreen.css'

export class GameScreen extends Component {

	getCurrentQuestion(){
		const question = this.props.questions[this.props.currentQuestion]
		return question ? question : null 
	}

	getCurrentAnswer(){
		let currentAnswer
		if(this.refs.trueRadio.checked) currentAnswer = true
		if(this.refs.falseRadio.checked) currentAnswer = false
		this.props.addAnswer({ questionNum: this.props.currentQuestion, questionAns: currentAnswer})
		setTimeout(null, 2000)
		this.toNextQuestionOrScore()
		this.resetQuestion()
	}

	toNextQuestionOrScore(){
		const gameOver = this.props.currentQuestion + 1 > (this.props.questions.length - 1)
		gameOver ? this.props.history.push('/score') : this.props.toNextQuestion()
	}

	resetQuestion(){
		this.refs.trueRadio.checked = false
		this.refs.falseRadio.checked = false
	}

	render(){
		return (
			<div>
				<h1>Game Screen | Question {this.props.currentQuestion + 1}</h1>
				{ this.getCurrentQuestion().question }

				<hr/>

				<label>True</label>
				<input onChange={this.getCurrentAnswer.bind(this)} ref='trueRadio' type='radio' name='trueAnswer' />

				<label>False</label>
				<input onChange={this.getCurrentAnswer.bind(this)} ref='falseRadio' type='radio' name='falseAnswer' />

				<br/>
			</div>	
		)
	}

}
