import axios from 'axios';
import { browserHistory } from 'react-router';

// import querystring from 'querystring';

import { Config } from '../../../config/Config';
import {saveLocalStorage, getLocalStorage} from '../../../components/Helpers';

// ------------------------------------
// Constants
// ------------------------------------

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE'
export const REGISTER_ERROR = 'REGISTER_RESPONSE'

// ------------------------------------
// Actions
// ------------------------------------

export function registerRequest () {
  alert("registerRequest");
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

export const signup = (values) => {
  return (dispatch) => {
    alert('come');
    dispatch(registerRequest());
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
        'Accept': 'application/json',
        'Content-Type': 'application/json'
	    }
    }).then(response => {
      alert("vinay");
			dispatch(registerResponse(response))
			browserHistory.push('/dashboardNew')
		}).catch(err => {
      alert("kumar");
			console.log('error in register', err)
      dispatch(registerError())
		})
	}
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
	[REGISTER_REQUEST]: (state, action) => {
    alert("actionhandler");
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

const actions = {
  signup
}

export default function registerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
