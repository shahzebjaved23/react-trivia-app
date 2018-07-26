import React, { Component } from 'react'
import './welcomeScreen'

export class WelcomeScreen extends Component {

	startGame(){
		this.props.startGame()
		this.props.history.push('/game')
	}

	render(){
		return (
			<div style={{ paddingTop: 50 }}>
				<div className="jumbotron" style={{ textAlign: "center"}}>
                    <h1>The Trivia App</h1>
                    <p>A simple trivia application</p>
                </div>
				<h2 style={{ textAlign: "center" }}>Complete the trivia to know test your knowledge and know your score</h2>
				<button className="btn btn-lg btn-success" style={{ margin: "auto", display: "block", marginTop: 50 }} onClick={ this.startGame.bind(this) } >
					Start Game
				</button>
			</div>
		)
	}

}