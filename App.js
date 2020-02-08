/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers'

import AppNavigator from './src/Components/Navigation/AppNavigator'

class App extends React.Component {
  render() {
    return (

      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <AppNavigator />

      </Provider>


    );
  }
}

export default App;
