import {searchFailure, searchRequest, searchSuccess, setSerials} from '../../actions/lessonActions';
import {handleActions} from 'redux-actions'

const defaultState = {
    serials: undefined,
    oneSerial:undefined,
    searchText: '',
    error: null
}

const serialsReducer = handleActions({
    [searchRequest]: (state,action) => ({
        ...state,
        searchText: action.payload
    }),
    [searchFailure]: (state,action) => ({
        ...state,
        error: action.payload
    }),
    [searchSuccess]: (state,action) => ({
        ...state,
        serials: action.payload,
    }),

},defaultState)

export const getSerials = state => state.serialsPage.serials
export const showSerial = state => state.serialsPage.oneSerial

export default serialsReducer;