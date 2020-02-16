import {USER_LOGIN_SUCESS , USER_SIGNUP_FAIL} from '../action/config'


const INITIAL_STATE = { loginSucess: false, loginData: null, userType:'' , userLogin : false , signUperr : null} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_LOGIN_SUCESS :
            return {...state , userLogin : action.payload}

        case USER_SIGNUP_FAIL:
            return {...state , signUperr : action.payload}
    
        default:
            return state;
    }
}