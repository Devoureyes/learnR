import {createActions} from 'redux-actions';


export const {
    setFollowersRequest,
    setFollowersSuccess,
    setFollowersFailure,
} = createActions({
    SET_FOLLOWERS_REQUEST:payload=>payload,
    SET_FOLLOWERS_SUCCESS:payload=>payload,
    SET_FOLLOWERS_FAILURE:payload=>payload,
})