import { combineReducers } from "redux";
import UserReducer from "./Reducer";

const RootReducer=combineReducers({
     dataReducer:UserReducer
})

export default RootReducer;