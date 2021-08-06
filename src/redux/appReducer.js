import {auth} from './authReducer';

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';

const appReducer = (state = {initialized: false}, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

const initializedSuccess = () => ({type: INITIALIZING_SUCCESS});

export const initializeApp = () => dispatch => {
    let promise = dispatch(auth());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
};
export default appReducer