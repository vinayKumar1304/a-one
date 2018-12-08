import axios from 'axios'
import { browserHistory } from 'react-router'

// import querystring from 'querystring';

import { Config } from '../../../config/Config'
import {saveLocalStorage, getLocalStorage} from '../../../components/Helpers'

// ------------------------------------
// Constants
// ------------------------------------

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const LOGIN_ERROR = 'LOGIN_RESPONSE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE'
export const REGISTER_ERROR = 'REGISTER_RESPONSE'

// ------------------------------------
// Actions
// ------------------------------------

export function loginRequest () {
  return {
    type: LOGIN_REQUEST,
    processing: true
  }
}

export function loginResponse (payload) {
  return {
    type: LOGIN_RESPONSE,
    processing: false,
    user: payload
  }
}

export function loginError (payload) {
  return {
    type: LOGIN_ERROR,
    error: true,
    processing: false,
    user: payload
  }
}

export function registerRequest () {
  return {
    type: REGISTER_REQUEST,
    processing: true
  }
}

export function registerResponse (payload) {
  return {
    type: REGISTER_RESPONSE,
    error: false
  }
}

export function registerError (payload) {
  return {
    type: REGISTER_ERROR,
    processing: false,
    error: true
  }
}

// --------------------------------------------
// Action Creator
// --------------------------------------------

export const login = (values) => {
  return (dispatch) => {
    dispatch(loginRequest())
    axios({
			url: 'http://localhost:4000/login',
	    method: 'POST',
	    data: {
				email: values.email,
				password: values.password
			},
		  timeout: 100000,
	    headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/json'
	    }
    }).then(response => {
			dispatch(loginResponse(response))
			if (typeof response.data !== 'undefined' && typeof response.data.email !== 'undefined') {
				saveLocalStorage('user', response.data)
				browserHistory.push('/dashboardNew')
			}
		}).catch(err => {
			console.log('error in login', err);
      dispatch(loginError())
		});
	}
}

export const signup = (values) => {
  return (dispatch) => {
    dispatch(registerRequest())
    axios({
	    method: 'POST',
	    url: `${Config.API.BASE_URL}/register`,
	    data: {
				first_name: values.first_name,
				last_name: values.last_name,
				email: values.email,
				password: values.password,
				gender: values.gender,
				mobile: values.mobile,
				dob: values.dob,
				status: values.status
			},
	    headers: {
        'Accept': Config.Accept,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
	    }
    }).then(response => {
			dispatch(registerResponse(response))
			browserHistory.push('/login')
		}).catch(err => {
			console.log('error in register', err)
      dispatch(registerError())
		})
	}
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
	[LOGIN_REQUEST]: (state, action) => {
    return {
      ...state,
      processing: action.processing
    };
  },
  [LOGIN_RESPONSE]: (state, action) => {
    return {
      ...state,
			processing: action.processing,
      user: action.user
    };
  },
  [LOGIN_ERROR]: (state, action) => {
    return {
      ...state,
			processing: action.processing,
      error: action.error
    };
  },
	[REGISTER_REQUEST]: (state, action) => {
    return {
      ...state,
      processing: action.processing
    };
  },
  [REGISTER_RESPONSE]: (state, action) => {
    return {
      ...state,
			processing: action.processing,
      user: action.user
    };
  },
  [REGISTER_ERROR]: (state, action) => {
    return {
      ...state,
			processing: action.processing,
      error: action.error
    };
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  error: false,
  processing: false,
  user: {}
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
