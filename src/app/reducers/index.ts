import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { UserState } from "./user.reducer"

export interface RootState {
    userReducer: UserState;
}


export default combineReducers({
    userReducer,
})