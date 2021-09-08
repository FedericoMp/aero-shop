import React, { useEffect, useContext, useReducer } from 'react';
import { getUser, getProducts, getUserHistory } from '../middleware/requests';

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
        case 'GET_USER': {
            return {
                ...state,
                user: action.value
            }
        };
        case 'GET_PRODUCTS': {
            return {
                ...state,
                products: action.value
            }
        };
        case 'GET_USER_HISTORY': {
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

    useEffect(() => {
        getUser()
            .then(userData => dispatch({ type: 'GET_USER', value: userData}));
        getProducts()
            .then(productsData => dispatch({ type: 'GET_PRODUCTS', value: productsData}));
        getUserHistory()
            .then(userHistory => dispatch({ type: 'GET_USER_HISTORY', value: userHistory}));
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