import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'


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
import EmailSent from '../Home/EmailSent'
import Draft from '../Home/Draft'

import DrawerMenu from '../Home/DrawerMenu'

//DrawerScreens
import MyTopics from '../Drawer/MyTopics'
import TopicDetail from '../Home/TopicDetail'


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
  CreateTopic,
  EmailSent,
  Draft,

}, {
  defaultNavigationOptions: {
    headerStyle: {
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },

  },
});

const MyTopicsSatck = createStackNavigator({
  //Screen Here
   MyTopics
},{
  defaultNavigationOptions: {
    headerTitle: null,
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
  },
});

const TopicDetalStack = createStackNavigator({
  //Screen Here
  TopicDetail
},{
  defaultNavigationOptions: {
    headerTitle: null,
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
  },
});

const DrawerStack = createDrawerNavigator({
  //Home,
  Home: {screen: Home},
 // TopicDetail: {screen: TopicDetail},

},{
    contentComponent: DrawerMenu,
  })


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Home: DrawerStack,
      Auth: AuthStack,
      App: AppStack,
      Guide : GuideStack,
      MyTopics : MyTopicsSatck,
      TopicDetail : TopicDetalStack
    },

    {
      initialRouteName: 'AuthLoading'
    }
  )
);
