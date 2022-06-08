import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({postReducer, userReducer});
const store = createStore(rootReducer, enhancer);

export default store;