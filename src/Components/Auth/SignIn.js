import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Image, Dimensions , KeyboardAvoidingView} from 'react-native'
import { Form, Text, Button, Input, Item } from 'native-base'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('window');

import { userLogin } from '../../action';
 

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: null,
          password : ''
         
        };
      }


    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }



    };

    componentDidMount(){
        console.log(this.props , 'Props')
    }

    render() {
        console.log(this.state.email , 'EMAIL')
        console.log(this.state.password.length)
        return (
            <View style={styles.mainContainer}>
               
                <KeyboardAvoidingView style={styles.mainContainer} 
                behavior={height < 700 ?  "position" : 'padding'} 
                >


                <View style={styles.imgView}>
                    <Image
                        source={require('../../../images/logo.png')}
                        style={styles.imgLogo}
                    />
                    <Text style={styles.imgText}>Citizen Speak</Text>

                </View>
                <View style={styles.txtHelloView}>
                    <Text style={styles.txtHello}>Sign In</Text>
                </View>

                <View>
                    <View style={styles.emailView}>
                        <Item regular style={styles.inputItem}>
                            <Input onChangeText={email=>{
                                this.setState({
                                    email : email
                                })
                            }} style={styles.inputEmail} placeholder='Email Address' />
                        </Item>
                    </View>

                   <View  style={styles.pwView}>
                        <Item regular style={styles.inputItem}>
                            <Input onChangeText={password=>{
                                this.setState({
                                    password : password
                                })
                            }} style={styles.inputEmail} placeholder='Password' secureTextEntry={true} />
                        </Item>
                   </View>

                   
                </View>




                <View style={styles.bottomContainer}>
                    <Button
                         onPress={()=>{
                        this.props.userLogin(this.state.email , this.state.password)
                         }} 
                        full 
                        disabled={!this.state.email || (this.state.password.length < 6)}
                        style={ (!this.state.email || this.state.password.length < 6) ?  styles.btnSignINDisable : styles.btnSignIN}
                      
                        >
                        <Text style={styles.txtSignIn}>Sign In</Text>
                    </Button>

                    <View style={styles.signupHintView}>
                        <Text style={styles.txtNewHere}>
                            New here ?
                            </Text>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('SignUp')
                        }}>
                            <Text style={styles.txtSignup}>
                                Sign up
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={styles.txtRights}>All Right Reserved By Citizen Speak</Text>
                    </View>

                </View>

                </KeyboardAvoidingView>
            
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
        marginBottom :10,
       //  borderColor : 'red',
        //borderWidth : 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    txtHello: {
        color: '#464646',
        fontSize: 24,
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
    btnSignINDisable: {
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        backgroundColor: '#b5b5b5',
    },
    txtSignIn: {
        fontSize: 20,
        fontWeight: '700',
        color: '#464646'
    },
    signupHintView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
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
    },
    emailView:{
        marginBottom : 20
    },
    pwView:{
        marginBottom : 20
    },
    inputItem: {
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 10,
    },
    inputEmail: {
        fontSize: 14,
        borderColor: '#464646',
        //borderWidth: 1,
        //borderRadius : 10,
    }
})


const mapStateToProps = state => {
    return {
      login : state.user.userLogin
    };
};

export default connect(mapStateToProps, {userLogin})(SignIn);

