import React, { useState, useContext, useReducer } from 'react';
import { getUser, getProducts, getUserHistory, postUserPoints, postRedeem } from '../middleware/requests';
import { REDUCER_TYPES } from '../constants';
import Snackbar from '@material-ui/core/Snackbar';

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
    if(action) {
        switch (action.type) {
            case REDUCER_TYPES.getUser: {
                return {
                    ...state,
                    user: action.payload
                }
            }
            case REDUCER_TYPES.getProducts: {
                return {
                    ...state,
                    products: action.payload
                }
            }
            case REDUCER_TYPES.getUserHistory: {
                return {
                    ...state,
                    history: action.payload
                }
            }
            case REDUCER_TYPES.postUserPoints: {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        points: action.payload
                    }
                }
            }
            case REDUCER_TYPES.postRedeem: {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        points: state.user.points - action.payload
                    }
                }
            }
            default: 
                return state;
        }
    } else {
        return state;
    }
}

// Custom hook to use the context created
const useAppContext = () => {
    return useContext(AppContext);
}

const AppProvider = ({children}) => {

    // Global state & dispatch function that sent actions to moddify state
    const [state, dispatch] = useReducer(reducer, initialState);
    const [openSnackbar, setSnackbar] = useState(false);
    const [snackbarMsj, setSnackbarMsj] = useState('null');
    
    const provGetUser = async () => {
        const userData = await getUser();
        dispatch({ 
            type: REDUCER_TYPES.getUser, 
            payload: userData});
    }

    const provGetProducts = async () => {
        const productsData = await getProducts();
        dispatch({ 
            type: REDUCER_TYPES.getProducts, 
            payload: productsData});
    }

    const provGetUserHistory = async () => {
        const userHistory = await getUserHistory();
        dispatch({ 
            type: REDUCER_TYPES.getUserHistory, 
            payload: userHistory});
    }

    const provPostUserPoints = async (points) => {
        const userPoints = await postUserPoints(points);
        const parsedPoints = Object.values(userPoints)[1];
        setSnackbarMsj(`???? ${userPoints.message} ????`);
        setSnackbar(true);
        dispatch({ 
            type: REDUCER_TYPES.postUserPoints, 
            payload: parsedPoints});
    }

    const provPostRedeem = async (productId, productCost) => {
        const productRedeem = await postRedeem(productId);
        setSnackbarMsj(`???? ${productRedeem.message} ????`);
        setSnackbar(true);
        dispatch({
            type: REDUCER_TYPES.postRedeem,
            payload: productCost});
    }

    const handleCloseSnackbar = () => {
        setSnackbarMsj('');
        setSnackbar(false);
    }

    return (
        <AppContext.Provider value={{
            user: state.user,
            products: state.products,
            history: state.history,
            provGetUser,
            provGetProducts,
            provGetUserHistory,
            provPostUserPoints,
            provPostRedeem
        }}>
            {children}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbarMsj}
            />
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext
};