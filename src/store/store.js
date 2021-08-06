// import { combineReducers, createStore, compose } from 'redux'
// import { excelReducer } from 'store/reducers/excelReducer'

// const rootReducer = combineReducers({
//     excelReducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// export const store = createStore(rootReducer, composeEnhancers())

import React, { createContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers';
import { excelReducer } from 'store/reducers/excelReducer'
import { overlayReducer } from './reducers/overlayReducer';

const initialState = {
    excelReducer: {
        excels: null
    },
    overlayReducer: {
        isOpen: false
    }
}

const [rootReducer, initialStateCombined] = combineReducers(
    {
        excelReducer: [excelReducer, initialState.excelReducer],
        overlayReducer: [overlayReducer, initialState.overlayReducer]
    }
);

const store = createContext(initialStateCombined);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialStateCombined)
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }