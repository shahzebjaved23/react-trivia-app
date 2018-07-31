import { NEXT_QUESTION, PREVIOUS_QUESTION, GAME_OVER, START_GAME, ADD_ANSWER, LOAD_QUESTIONS, CALCULATE_SCORE } from './actionTypes'

export const loadQuestions = () => {
	return dispatch => {
		fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean").then(data => {
			data.json().then(response => {
				const actionPayload = response	
				const action = { type: LOAD_QUESTIONS, payload: actionPayload }
				dispatch(action)
			})
		})
	}
}

export const nextQuestion = () => {
	return { type: NEXT_QUESTION }
}

export const previousQuestion = () => {
	return { type: PREVIOUS_QUESTION }
}

export const startGame = () => {
	return { type: START_GAME }
}

export const addAnswer = answer => {
	return {
		type: ADD_ANSWER,
		payload: { answer: answer }
	}
}

export const calcuateScore = () => {
	return { type: CALCULATE_SCORE }
}