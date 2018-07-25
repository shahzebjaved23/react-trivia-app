import React, { Component } from 'react'
import './scoreScreen.css'
import { Link } from 'react-router-dom'

export class ScoreScreen extends Component {

	render(){
		return (
			<div>
				<h1>Score Screen</h1>
				<Link to='/game'>
					<button>Play Again</button>
				</Link>
			</div>	
		)
	}

}