import {setSerials} from '../../actions/lessonActions';
import {handleActions} from 'redux-actions'

const defaultState = {
    serials: undefined
}

const serialsReducer = handleActions({
    [setSerials]: (state,action) => ({
        ...state,
        serials: action.payload
    })
},defaultState)

export const getSerials = state => state.serialsPage.serials

export default serialsReducer;