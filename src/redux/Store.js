import {createStore} from "redux"
import { MovieReducer } from "./Reducer"


export const store = createStore(MovieReducer)