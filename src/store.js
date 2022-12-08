import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./reducers/counter";
import profileReducer from "./reducers/profile";

const rootReducer = combineReducers({
  counter: counterReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
