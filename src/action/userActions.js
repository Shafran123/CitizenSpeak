import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';


import { USER_LOGIN_SUCESS, USER_SIGNUP_FAIL } from '../action/config'

var dbUsers = firestore().collection('Users')

export const userLogin = (email, password, callback) => async dispatch => {

  try {
    await auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res.user)
      AsyncStorage.setItem('user', JSON.stringify(res.user))
      dispatch({ type: USER_LOGIN_SUCESS, payload: true })
      callback(res , null)
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: USER_SIGNUP_FAIL, payload: e.toString() })
    callback(null , e)
  }

}

export const createUser = (email, password, callback) => async dispatch => {

  try {
    await auth().createUserWithEmailAndPassword(email, password).then((res) => {
      console.log(res)
      AsyncStorage.setItem('user', JSON.stringify(res.user))
      //dispatch({ type: USER_LOGIN_SUCESS, payload: true })
      callback(res, null)
    });
  } catch (e) {
    console.log(e.toString());
    callback(null, e.toString())
    dispatch({ type: USER_SIGNUP_FAIL, payload: e.toString() })
  }

}

export const saveUserData = (fullName , jobRole , company , city , bio , callback) => async dispatch => {

  const user = firebase.auth().currentUser;

          dbUsers.doc(user.uid).set({
            FullName: fullName,
            jobRole: jobRole,
            Company: company,
            City : city,
            Bio : bio
          }, { merge: true }).then((res) => {
            console.log(res ,'User Data Saved created')
            callback('res' , null)

          }).catch((err) => {
            console.log('Error writing document : ', err)
            callback(null , err)
          })

}