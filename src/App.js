import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { nextQuestion, previousQuestion, startGame } from './actions/questionActions'
import { GameScreen } from './components/GameScreen/gameScreen'
import { ScoreScreen } from './components/ScoreScreen/scoreScreen'
import { WelcomeScreen } from './components/WelcomeScreen/welcomeScreen'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>The Trivia App</h1>
                    <Link to='/game'><button>Start Game</button></Link>    
                    <Route exact path='/'  component={WelcomeScreen} />
                    <Route path='/game' component={GameScreen} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questionReducer.questions,
        currentQuestion: state.questionReducer.currentQuestion,
        gameOver: state.questionReducer.gameOver
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
