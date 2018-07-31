import React, { Component } from 'react'
import { loadQuestions, nextQuestion, previousQuestion, startGame, addAnswer } from '../../actions/questionActions'
import { connect } from 'react-redux'
import './welcomeScreen.css'

class WelcomeScreen extends Component {

	componentWillMount(){
		this.props.loadQuestions()
	}

	startGame(){
		this.props.startGame()
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

const mapStateToProps = state => {
    return {
        questions: state.questionReducer.questions,
        currentQuestion: state.questionReducer.currentQuestion,
        answers: state.questionReducer.answers,
        score: state.questionReducer.score
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

export default connect(mapStateToProps, mapDistpatchToProps)(WelcomeScreen) 