
import React, { Component } from 'react'
import { View , Text } from 'react-native'

class Home extends Component {


    static navigationOptions = {
        header: null
    };

  render() {
    return (
        <View>
            <Text style={{paddingTop : 50 ,paddingLeft : 20}}>Hello Citizen Speak</Text>
        </View>
    )
  }
}

export default Home;