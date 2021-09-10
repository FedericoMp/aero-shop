import React, { useEffect, useContext, useReducer } from 'react';
import { getUser, getProducts, getUserHistory } from '../middleware/requests';
import { REDUCER_TYPES } from '../constants';

// App Context
const AppContext = React.createContext();

// Initial State
const initialState = {
    user: {},
    products: [],
    history: []
};

// Reducer function that moddify the state
const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_TYPES.getUser: {
            return {
                ...state,
                user: action.value
            }
        };
        case REDUCER_TYPES.getProducts: {
            return {
                ...state,
                products: action.value
            }
        };
        case REDUCER_TYPES.getUserHistory: {
            return {
                ...state,
                history: action.value
            }
        };
    }
    return state
}

// Custom hook to use the context created
const useAppContext = () => {
    return useContext(AppContext);
}

const AppProvider = ({children}) => {

    // Global state & dispatch function that sent actions to moddify state
    const [state, dispatch] = useReducer(reducer, initialState);

    // TODO - bug fix:
    // When the user add points, the user data doesn't update
    useEffect(() => {
        getUser()
            .then(userData => dispatch({ type: REDUCER_TYPES.getUser, value: userData}));
        getProducts()
            .then(productsData => dispatch({ type: REDUCER_TYPES.getProducts, value: productsData}));
        getUserHistory()
            .then(userHistory => dispatch({ type: REDUCER_TYPES.getUserHistory, value: userHistory}));
    }, []);

    return (
        <AppContext.Provider value={{
            user: state.user,
            products: state.products,
            history: state.history,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext
};