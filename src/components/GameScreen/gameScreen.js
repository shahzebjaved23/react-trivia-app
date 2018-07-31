import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions, nextQuestion, previousQuestion, startGame, addAnswer } from '../../actions/questionActions'
import './gameScreen.css'

class GameScreen extends Component {

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
		if(this.props.gettingQuestions){
			return (
				<div className="container" style={{ paddingTop: 80 }}>
					<h1 style={{ textAlign: "center" }}>Loading New Question Please wait ...</h1>
				</div>	
			)
		}else{
			return (
				<div className="container" style={{ paddingTop: 80 }}>
					<div className="jumbotron">
						<h1 dangerouslySetInnerHTML={{ __html: `No # ${ this.props.currentQuestion + 1 } : ${ this.getCurrentQuestion().question  }`}}></h1>
						<p>{ this.props.questions[this.props.currentQuestion].category }</p>
					</div>

					<div className="row">
						<div className="col-md-6">
							<button onClick={() => this.addCurrentAnswerAndNext("True") } className="btn btn-lg btn-success answer-button">True</button>
						</div>
						<div className="col-md-6">
							<button onClick={() => this.addCurrentAnswerAndNext("False") } className="btn btn-lg btn-warning answer-button">False</button>	
						</div>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
    return {
        questions: state.questionReducer.questions,
        currentQuestion: state.questionReducer.currentQuestion,
        answers: state.questionReducer.answers,
        score: state.questionReducer.score,
        gettingQuestions: state.questionReducer.gettingQuestions
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        toNextQuestion: () => dispatch(nextQuestion()),
        toPreviousQuestion: () => dispatch(previousQuestion()),
        toWelComeScreen: () => dispatch(startGame()),
        startGame: () => dispatch(startGame()),
        addAnswer: (answer) => dispatch(addAnswer(answer)) ,
        loadQuestions: () => dispatch(loadQuestions())
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(GameScreen)
