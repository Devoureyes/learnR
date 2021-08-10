import {createActions} from 'redux-actions';

const {toggleIsFetching,setCurrentPage,setCurrentPages,setUsers} =
createActions('TOGGLE_IS_FETCHING','SET_CURRENT_PAGE','SET_CURRENT_PAGES','SET_USERS')
