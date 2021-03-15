import { combineReducers, createStore } from "redux";
import { tasksReducer } from "../reducers/tasks-reducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});
export const store = createStore(rootReducer);
