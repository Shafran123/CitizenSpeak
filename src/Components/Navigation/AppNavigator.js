import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from '../Home/Home'

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
        App : AppStack
      },
  
      {
        initialRouteName: 'App'
      }
    )
  );
  