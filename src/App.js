import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { nextQuestion, previousQuestion, startGame, addAnswer, welcomeScreen, loadQuestions } from './actions/questionActions'
import GameScreen from './components/GameScreen/gameScreen'
import ScoreScreen from './components/ScoreScreen/scoreScreen'
import WelcomeScreen from './components/WelcomeScreen/welcomeScreen'

class App extends Component {  
    componentDidMount(){
        window.onhashchange = () => {
            let toWelcomeScreen = this.props.currentQuestion == 0
            if(toWelcomeScreen){
                this.props.toWelComeScreen()
            }
        }
    }

    render() {
        return (
            <Router>
                <div style={{ height: '100vh' ,backgroundColor: "#eeeeee" }}>
                    <Route exact path='/' component={WelcomeScreen} />
                    <Route path='/game' component={GameScreen} />
                    <Route path='/score' component={ScoreScreen} />
                </div>
            </Router>
        );
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

export default connect(mapStateToProps, mapDistpatchToProps)(App);
