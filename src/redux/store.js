import { createStore } from "redux";
import React from 'react'


const initialState = {
    user: {
        email: '',
        password: '',
        isAuthenticated: false
    }
};

const store = createStore(
    reducer,
  // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state = initialState, action) {
    if (action.type === 'Login') {
        state.user = action.payload
        state.user.isAuthenticated = true;
    } else if (action.type === 'SIGN_OUT') {

    } else {

    }


    return state; // grab everything inside of initialState and make new object and return it
}

export default store;