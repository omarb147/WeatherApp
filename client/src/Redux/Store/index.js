import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { weatherAPIReducer } from "../Reducers";

const rootReducer = combineReducers({ weatherAPI: weatherAPIReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
