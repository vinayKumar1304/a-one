// ------------------------------------
// Constants
// // ------------------------------------
export const LOADING_IMAGE = 'LOADING_IMAGE';

// ------------------------------------
// Actions
// ------------------------------------
export function showLoadingImage (status) {
  return {
    type: LOADING_IMAGE,
    loader: status
  }
}
// ------------------------------------
// Actions creators
// ------------------------------------
export const loadingImage = (status) => {
  return (dispatch) => {
    dispatch(showLoadingImage(status));
  }
}

export const actions = {
  loadingImage,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOADING_IMAGE]: (state, action) => {
    return {
      ...state,
      loader: action.loader
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
