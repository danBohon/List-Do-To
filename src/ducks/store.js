import { createStore, applyMiddleware, combineReducers } from "redux";
import taskReducer from "./reducer";
import reduxPromiseMiddleware from 'redux-promise-middleware';

const reducer = combineReducers({
    task: taskReducer
})

export default createStore( 
    reducer,
    applyMiddleware(reduxPromiseMiddleware())
);
