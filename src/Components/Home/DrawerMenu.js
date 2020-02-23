import React, { Component } from 'react'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { View , Image, TouchableHighlight} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class DrawerMenu extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FDD62B' }}>
                <View style={{ marginTop: 30, marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: '#464646' }}>Shafran Naizer</Text>
                        <Text style={{ fontSize: 10 }}>Undergraduate NSBM Green University</Text>
                    </View>

                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'white', marginRight: 10 , flexDirection: 'row' ,justifyContent: 'center' , alignItems: 'center' }}>
                        <Image
                            source={require('../../../images/logo.png')}
                            style={{height: 40, width: 40 , position: 'absolute'}}
                  
                        />
                    </View>

                </View>

                <View style={{height: 1 , backgroundColor: 'white' , marginTop: 20}}>

                </View>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginTop: 20 , marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 18}}>
                        My Topics
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginTop: 20 , marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 18}}>
                        Profile
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginTop: 20 , marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 18}}>
                        Groups
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginTop: 20 , marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 18}}>
                        Complaint
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginTop: 20 , marginLeft: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 18}}>
                        Settings
                    </Text>
                </View>
                </TouchableOpacity>

                <View style={{position: 'absolute' , bottom: 0 ,marginLeft: 20}}>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginBottom: 10}}>
                    <Text style={{fontSize: 14 , fontWeight: '800'}}>
                        Sign Out
                    </Text>
                </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginBottom: 10}}>
                    <Text style={{fontSize: 14}}>
                        Contact us
                    </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    console.log('hey')
                }}>
                <View style={{marginBottom: 10}}>
                    <Text style={{fontSize: 14}}>
                    About
                    </Text>
                </View>
                </TouchableOpacity>

                <View style={{marginBottom: 20}}>
                    <Text style={{fontSize: 14 , color: '#888'}}>
                     v1.0
                    </Text>
                </View>

                </View>
               
            </View>
        )
    }
}

export default DrawerMenu
