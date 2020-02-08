import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../Home/Home'

const AppStack = createStackNavigator({
   //Screen Here
   Home
  
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: '#007aff',
    },
  });



export default createAppContainer(
    createSwitchNavigator(
      {
        App : AppStack
      },
  
      {
        initialRouteName: 'App'
      }
    )
  );
  