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
  }
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
