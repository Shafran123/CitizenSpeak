/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  ActivityIndicator,
  AsyncStorage,
  View,
} from 'react-native';


class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
    
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user')
    console.log(userToken)
    this.props.navigation.navigate(userToken ? 'Home' : 'AuthMain');
  };



  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading
