import { combineReducers } from "redux";

import { LoginReducer } from "./reducers/loginReducer";

export const rootReducer = combineReducers({loginReducer: LoginReducer});