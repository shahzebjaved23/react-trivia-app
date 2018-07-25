import { NEXT_QUESTION, PREVIOUS_QUESTION, START_GAME, ADD_ANSWER } from '../actions/actionTypes'

const initialState = {
	questions: [],
	currentQuestion: null,
	answers: {}
}

const getNextQuestion = state => {
	return state.currentQuestion + 1
}

const getGameOver = state => {
	return getNextQuestion(state) > state.questions.length
}

const getPreviousQuestion = state => {
	return state.currentQuestion - 1 <= 0 ? 0 : state.currentQuestion 
}

export const questionReducer = (state = initialState, action) => {
	switch(action.type){

		case START_GAME :
			return {
				...state,
				currentQuestion: 0
			}
			break;
		
		case NEXT_QUESTION :
			return {
				...state,
				currentQuestion: state.currentQuestion + 1
			}
			break;

		case PREVIOUS_QUESTION :
			return {
				...state,
				currentQuestion: getPreviousQuestion(state)
			}
			break;

		case ADD_ANSWER :
			return {
				...state,
				answers: state.answers[`${action.payload.answer.questionNum}`] = action.payload.answer.questionAns
			}
			break;

		default:
			return state
			break;
	}
}


