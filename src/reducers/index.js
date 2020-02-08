/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */

import { combineReducers } from 'redux'
import userReducer from './userReducer'

export default combineReducers({

    user: userReducer,

})
