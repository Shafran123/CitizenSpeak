import {USER_LOGIN_SUCESS , USER_SIGNUP_FAIL ,FETCH_TRENDING_SUCESS, FETCH_DEV_TOPIC_SUCESS, STORE_TOPIC_SUCESS , FETCH_AUTHOR_SUCESS} from '../action/config'


const INITIAL_STATE = { loginSucess: false, loginData: null, userType:'' , userLogin : false , signUperr : null , trendingTopics: [] , devTopics: [] , detailedTopic:[], author:null} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USER_LOGIN_SUCESS :
            return {...state , userLogin : action.payload}

        case USER_SIGNUP_FAIL:
            return {...state , signUperr : action.payload}
        
        case FETCH_TRENDING_SUCESS:
            return {...state , trendingTopics : action.payload}
        
        case FETCH_DEV_TOPIC_SUCESS:
            return {...state , devTopics : action.payload}
    
        case STORE_TOPIC_SUCESS:
            return {...state , detailedTopic : action.payload}

        case FETCH_AUTHOR_SUCESS:
            return {...state , author : action.payload}
        default:
            return state;
    }
}