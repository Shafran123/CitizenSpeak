import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';


import {USER_LOGIN_SUCESS , USER_SIGNUP_FAIL} from '../action/config'

export const userLogin = (email , password , callback) => async dispatch =>{

        try {
          await auth().signInWithEmailAndPassword(email, password).then((res)=>{
            console.log(res.user)
            AsyncStorage.setItem('user', JSON.stringify(res.user))
            dispatch({ type: USER_LOGIN_SUCESS, payload: true })
            callback()
          });
        } catch (e) {
          console.log(e);
        }
  
}

export const createUser = (email , password , callback) => async dispatch =>{

    try {
        await auth().createUserWithEmailAndPassword(email, password).then((res)=>{
            console.log(res)
          //dispatch({ type: USER_LOGIN_SUCESS, payload: true })
          callback(res , null)
        });
      } catch (e) {
        console.log(e.toString());
        callback(null , e.toString())
        dispatch({ type: USER_SIGNUP_FAIL, payload: e.toString() })
      }

}