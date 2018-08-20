import { NEXT_QUESTION, PREVIOUS_QUESTION, START_GAME, ADD_ANSWER, LOAD_QUESTIONS, CALCULATE_SCORE, GETTING_QUESTIONS } from '../actions/actionTypes'

const initialState = {
	questions: [],
	currentQuestion: null,
	answers: [],
	score: null,
	gettingQuestions: null
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

		case LOAD_QUESTIONS:
			return {
				...state,
				questions: action.payload.results,
				gettingQuestions: false
			}
			break;

		case CALCULATE_SCORE:
			let score = state.questions.map( (question, index) => {
				let correctAnswer = question.correct_answer === state.answers[index.toString()]
				return correctAnswer ? 1 : 0
			}).reduce( (sum, current) => sum + current )
			return {
				...state,
				score: score
			}
			break;

		case GETTING_QUESTIONS:
			return {
				...state,
				gettingQuestions: true
			}
			break;

		default:
			return state
			break;
	}
}


