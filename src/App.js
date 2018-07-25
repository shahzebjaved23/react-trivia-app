import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { nextQuestion, previousQuestion, startGame } from './actions/questionActions'
import { GameScreen } from './components/GameScreen/gameScreen'
import { ScoreScreen } from './components/ScoreScreen/scoreScreen'
import { WelcomeScreen } from './components/WelcomeScreen/welcomeScreen'

class App extends Component {

    startGame(){
        this.props.startGame()
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>The Trivia App</h1>  
                    <Route exact path='/' render={(props) => <WelcomeScreen startGame={this.props.startGame} {...props} /> }  />
                    <Route path='/game' render={(props) => <GameScreen currentQuestion={this.props.currentQuestion} questions={this.props.questions} toNextQuestion={this.props.toNextQuestion} toPreviousQuestion={this.props.toPreviousQuestion} {...props} />}  />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questionReducer.questions,
        currentQuestion: state.questionReducer.currentQuestion,
        answers: state.questionReducer.answers
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        toNextQuestion: () => { dispatch(nextQuestion()) },
        toPreviousQuestion: () => { dispatch(previousQuestion()) },
        startGame: () => { dispatch(startGame()) }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(App);
