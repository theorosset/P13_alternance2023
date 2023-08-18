import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'


export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = (userData: { password: string; email: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = (await axios.post(
        'http://localhost:3001/api/v1/user/login',
        userData,
      )) as AxiosResponse
      const user = {
        email: userData.email,
        token: res.data.body.token,
        isConnected: true,
      }
      
      dispatch({ type: LOGIN_USER, payload: user })
    } catch (error) {
      console.error(error)
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
