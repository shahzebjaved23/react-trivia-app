import { NEXT_QUESTION, PREVIOUS_QUESTION, START_GAME, ADD_ANSWER } from '../actions/actionTypes'

const initialState = {
	questions: require('../questions.json'),
	currentQuestion: null,
	answers: []
}

const getNextQuestion = state => {
	return state.currentQuestion + 1
}

const getPreviousQuestion = state => {
	return state.currentQuestion - 1 <= 0 ? 0 : state.currentQuestion 
}

export const questionReducer = (state = initialState, action) => {
	switch(action.type){

		case START_GAME :
			return {
				...state,
				currentQuestion: 0,
				answers: {}
			}
			break;
		
		case NEXT_QUESTION :
			return {
				...state,
				currentQuestion: getNextQuestion(state)
			}
			break;

		case PREVIOUS_QUESTION :
			return {
				...state,
				currentQuestion: getPreviousQuestion(state)
			}
			break;

		case ADD_ANSWER :
			const answers = state.answers
			answers[`${action.payload.answer.questionNum}`] = action.payload.answer.questionAns
			return {
				...state,
				answers: answers
			}
			break;

		default:
			return state
			break;
	}
}


