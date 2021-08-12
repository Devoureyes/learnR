import {
    searchFailure, searchRequest, searchSuccess,
oneSerialSuccess,oneSerialFailure,oneSerialRequest
} from '../../actions/lessonActions';
import {handleActions} from 'redux-actions'

const defaultState = {
    serials: undefined,
    oneSerial: {image:null,name:null,officialSite:null,summary:null,genres:null,status:null},
    error: '',
    fetch: false,
    searchText: '',
}

const serialsReducer = handleActions({
    [searchRequest]: (state, action) => ({
        ...state,
        fetch: true,
        searchText: action.payload
    }),
    [searchFailure]: (state, action) => ({
        ...state,
        serials: undefined,
        error: action.payload,
        fetch: false
    }),
    [searchSuccess]: (state, action) => ({
        ...state,
        serials: action.payload,
        error: '',
        fetch: false
    }),
    [oneSerialRequest]: (state,action) => ({
        ...state,
        fetch: true
    }),
    [oneSerialSuccess]: (state,action) => ({
        ...state,
        oneSerial: action.payload,
        fetch: false
    }),
    [oneSerialFailure]: (state,action) => ({
        ...state,
        error: action.payload,
        fetch: false
    }),

}, defaultState)

export const getSerials = state => state.serialsPage.serials
export const getOneSerial = state => state.serialsPage.oneSerial
export const getFetch = state => state.serialsPage.fetch
export const getError = state => state.serialsPage.error

export default serialsReducer;