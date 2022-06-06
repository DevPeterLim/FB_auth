import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import postReducer from "./postReducer";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers(postReducer);
const store = createStore(rootReducer, enhancer);

export default store;