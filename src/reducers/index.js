import { combineReducers } from "redux";
import { employees } from "./employees.reducer";
import { view } from "./view.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({ employees, view, alert });

export default rootReducer;
