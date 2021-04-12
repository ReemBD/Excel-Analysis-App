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

const initialState = {
    excelReducer: {
        excels: null
    }
}

const [rootReducer, initialStateCombined] = combineReducers(
    { excelReducer: [excelReducer, initialState.excelReducer] }
);

const store = createContext(initialStateCombined);
const { Provider } = store;

const StateProvider = ({ children }) => {
    console.log({ rootReducer, initialStateCombined });
    const [state, dispatch] = useReducer(rootReducer, initialStateCombined)
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }