import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import logger from "redux-logger";


const Store = createStore(reducer,applyMiddleware(logger))