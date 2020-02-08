import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Auth
import AuthMain from '../Auth/AuthMain'


import Home from '../Home/Home'


const AuthStack = createStackNavigator({
  AuthMain
},
  {
    defaultNavigationOptions:{
      headerStyle: {
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
    }
  })


const AppStack = createStackNavigator({
  //Screen Here
  Home

}, {
  defaultNavigationOptions: {
    headerStyle: {
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },

  },
});



export default createAppContainer(
  createSwitchNavigator(
    {
      Auth : AuthStack,
      App: AppStack
    },

    {
      initialRouteName: 'Auth'
    }
  )
);
