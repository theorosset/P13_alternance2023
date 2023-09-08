import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { UserState } from '../reducers/user.reducer';


export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (userData: Partial<UserState>) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/api/v1/user/login', userData) as AxiosResponse

      const user = {
        email: userData.email,
        token: res.data.body.token,
        isConnected: true,
      }
      
      dispatch({ type: LOGIN_USER, payload: user })
    } catch (error) {
      console.error(error)
      return 'error'
    }
  }
}

export const GET_PROFILE = 'GET_PROFILE'

export const getProfile = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = (await axios.post('http://localhost:3001/api/v1/user/profile',null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )) as AxiosResponse

      dispatch({ type: GET_PROFILE, payload: res.data.body })
    } catch (error) {
      console.error(error)
    }
  }
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const updateProfile = (userUpdate: Partial<UserState>, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = (await axios.put('http://localhost:3001/api/v1/user/profile', userUpdate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )) as AxiosResponse

      Object.assign(res.data.body, {isConnected: true, token: token})

      dispatch({ type: UPDATE_PROFILE, payload: res.data.body })
    } catch (error) {
      console.error(error)
    }
  }
}

export const DISCONNECT_USER = 'DISCONNECT_USER'


export const disconnectUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      const user = {
        email: '',
        firstName: '',
        lastName: '',
        token: '',
        name: '',
        isConnected: false,
      }
      dispatch({ type: DISCONNECT_USER, payload: user })
    } catch (error) {
      console.error(error)
    }
  }
}