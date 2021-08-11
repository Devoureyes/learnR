import {createActions} from 'redux-actions';


export const {
    follow,
    unfollow,
    setPageSize,
    toggleIsFollowingProgress,
    toggleIsFetching,
    setTotalUsersCount,
    setCurrentPage,
    setCurrentPages,
    setUsers,
    setUsersRequest
} = createActions(
    {
        FOLLOW:payload=>payload,
        UNFOLLOW:payload=>payload,
        SET_PAGE_SIZE:payload=>payload,
        TOGGLE_IS_FOLLOWING_PROGRESS:payload=>payload,
        TOGGLE_IS_FETCHING:payload=>payload,
        SET_TOTAL_USERS_COUNT:payload=>payload,
        SET_CURRENT_PAGE:payload=>payload,
        SET_CURRENT_PAGES:payload=>payload,
        SET_USERS:payload=>payload,
        SET_USERS_REQUEST:payload=>payload
    });


