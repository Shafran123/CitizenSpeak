import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoading from '../Auth/AuthLoading'

//Auth
import AuthMain from '../Auth/AuthMain'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import SignUpDetail from '../Auth/SignUpDetail'

//Guide
import Guide from '../Guide/Guide'

import Home from '../Home/Home'
import CreateTopic from '../Home/CreateTopic'


const AuthStack = createStackNavigator({
  AuthMain,
  SignIn,
  SignUp,
  SignUpDetail
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
    }
  })


const GuideStack = createStackNavigator({
  Guide,
  
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
    }
  })

const AppStack = createStackNavigator({
  //Screen Here
  Home,
  CreateTopic

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
      AuthLoading,
      Auth: AuthStack,
      App: AppStack,
      Guide : GuideStack
    },

    {
      initialRouteName: 'AuthLoading'
    }
  )
);
