/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './src/Navigation/AppNavigator';

class App extends React.Component {
  render() {
    return (
   
      
          <AppNavigator />


    );
  }
}

export default App;
