import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Text, Button } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('window');

class AuthMain extends Component {

  
    static navigationOptions = ({navigation})=>{
        return{
            headerShown: false
        }
  
        
     
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.imgView}>
                    <Image
                        source={require('../../../images/logo.png')}
                        style={styles.imgLogo}
                    />
                    <Text style={styles.imgText}>Citizen Speak</Text>

                </View>
                <View style={styles.txtHelloView}>
                    <Text style={styles.txtHello}>Hello!</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <Button  onPress={() => this.props.navigation.navigate('SignIn')} full style={styles.btnSignIN}>
                        <Text style={styles.txtSignIn}>Sign In</Text>
                    </Button>

                    <View style={styles.signupHintView}>
                        <Text style={styles.txtNewHere}>
                            New here ?
                            </Text>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')}> 
                            <Text style={styles.txtSignup}>
                                Sign up
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={styles.txtRights}>All Right Reserved By Citizen Speak</Text>
                    </View>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    imgView: {
        alignSelf: 'center'
    },
    imgLogo: {
        marginTop: 60,
        //borderColor: 'red',
        //borderWidth : 1,
        height: 150,
        width: 225
    },
    imgText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500'
    },
    txtHelloView: {
        // marginTop : 20,
        // borderColor : 'red',
        //borderWidth : 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    txtHello: {
        color: '#464646',
        fontSize: 60,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',

        // borderColor : 'red',
        //borderWidth : 1
    },
    bottomContainer: {
        justifyContent: 'flex-end'
    },
    btnSignIN: {
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        backgroundColor: '#FDD62B',

    },
    txtSignIn: {
        fontSize: 20,
        fontWeight: '700',
        color: '#464646'
    },
    signupHintView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
    },
    txtNewHere: {
        color: '#464646',
        fontWeight: '600',
        textAlign: 'center',
    },
    txtSignup: {
        fontWeight: '600',
        color: '#2E89E4',
        marginLeft: 5
    },
    txtRights: {
        color: '#464646',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 12
    }
})

export default AuthMain