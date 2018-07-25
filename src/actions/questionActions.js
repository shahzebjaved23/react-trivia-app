import { NEXT_QUESTION, PREVIOUS_QUESTION, GAME_OVER, START_GAME, ADD_ANSWER } from './actionTypes'

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