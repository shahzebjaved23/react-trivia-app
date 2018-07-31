import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions, nextQuestion, previousQuestion, startGame, addAnswer, calculateScore } from '../../actions/questionActions'
import './scoreScreen.css'

class ScoreScreen extends Component {

	componentWillMount(){
		this.props.calculateScore()
	}

	playAgain(){
		this.props.loadQuestions()
		this.props.startGame()
		this.props.history.push('/game')
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

				<h2 style={{ textAlign: "center"}}>Total Score: { this.props.score } / { this.props.questions.length }</h2>
				<button className="btn btn-lg btn-success play-again-button" onClick={this.playAgain.bind(this)}>Play Again</button>
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
        loadQuestions: () => dispatch(loadQuestions()),
        calculateScore: () => dispatch(calculateScore())
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(ScoreScreen)
