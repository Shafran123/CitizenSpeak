import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'


class Draft extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }



    };

    render() {
       // const email = this.props.navigation.getParam('emailTo', null);
        return (
            <View style={{flex: 1 , backgroundColor: 'white'}}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image
                        source={require('../../../images/logo.png')}
                        style={{ alignSelf: 'center', height: 150, width: 225 }}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: '500' }}>Citizen Speak</Text>
                    <Text style={{textAlign: 'center', marginLeft: 20, marginRight:20 , marginTop: 10 , fontSize: 14}}> Your Topic save as draft you can access your darfts from MY Topics!</Text>
             
                </View>

    
            </View>

            <View>
                <Button style={{borderRadius: 10, marginRight: 20 , marginLeft: 20, marginBottom: 20 , backgroundColor: '#FDD62B' , justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center' , color: 'black' , fontWeight: '700' , fontSize: 20}}>
                        Got It
                    </Text>
                </Button>
            </View>
            </View>
  

        )
    }
}

export default Draft
