import { applyMiddleware, combineReducers, createStore } from "redux";

//Dev tools para ver los states por consola
import { composeWithDevTools } from "redux-devtools-extension";
import tasksReducer from "./reducers/tasks.reducer";
//Thunk para realizar llamadas asíncronas
import thunkMiddleware from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const RootReducer = combineReducers({
  tasks: tasksReducer,
});

//Nuestro store generado con el RootReducer y nuestro enhancer compuesto con devtools y llamadas asíncronas
export default createStore(RootReducer, composedEnhancer);
