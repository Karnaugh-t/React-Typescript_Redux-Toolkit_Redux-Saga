import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'

export const rootReducer = combineReducers({
    counter: counterReducer
})