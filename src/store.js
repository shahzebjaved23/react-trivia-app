import { questionReducer } from './reducers/questionReducer'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
	questionReducer: questionReducer
})

export const store = createStore(rootReducer)