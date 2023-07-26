import {combineReducers, createStore} from "redux";
import {arrayReducer} from "./counter-reducer";

const rootReducer = combineReducers ({
    arrayCounter:arrayReducer
})
export type ArrayStoreType =ReturnType<typeof rootReducer>
export  const store = createStore(rootReducer)