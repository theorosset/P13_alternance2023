import { GET_PROFILE, LOGIN_USER, UPDATE_PROFILE } from "../actions/user.action";


export interface UserState {
    email: string,
    token: string,
    firstName: string,
    lastName: string,
    name: string,
    isConnected: boolean,
}


const initialState: UserState = {
    email: '',
    firstName: '',
    lastName: '',
    token: '',
    name: '',
    isConnected: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER :
      return action.payload;

    case GET_PROFILE : 
      return {
        ...state,
        ...action.payload
      }

    case UPDATE_PROFILE : 
      return action.payload
      
      
    default:
      return state;
  }
};

