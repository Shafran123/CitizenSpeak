import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'


class EmailSent extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }



    };

    render() {
        return (
            <View style={{flex: 1 , backgroundColor: 'white'}}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image
                        source={require('../../../images/logo.png')}
                        style={{ alignSelf: 'center', height: 150, width: 225 }}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: '500' }}>Citizen Speak</Text>
                    <Text style={{textAlign: 'center', marginLeft: 20, marginRight:20 , marginTop: 10 , fontSize: 14}}> Thanks For joinging with us Your Valuble idea will recive govermnent offcials.it will be pending satge for now</Text>
                    <Text style={{textAlign: 'center', marginLeft: 20, marginRight:20 , marginTop: 10 , fontSize: 14 , fontWeight: '700'}}> We Also Emailed a copy of your subbmision to</Text>
                    <Text style={{textAlign: 'center', marginLeft: 20, marginRight:20 , marginTop: 10 , fontSize: 24 , fontWeight: '700' , color: '#2AC940'}}> Shafran@ieee.org</Text>
                </View>

    
            </View>

            <View>
                <Button style={{borderRadius: 10, marginRight: 20 , marginLeft: 20, marginBottom: 20 , backgroundColor: '#FDD62B' , justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center' , color: 'black' , fontWeight: '700' , fontSize: 20}}>
                        Done
                    </Text>
                </Button>
            </View>
            </View>
  

        )
    }
}

export default EmailSent
