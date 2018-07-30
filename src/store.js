import { questionReducer } from './reducers/questionReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	questionReducer: questionReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))