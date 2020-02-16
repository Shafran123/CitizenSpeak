import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Form, Text, Button, Input, Item } from 'native-base'
import { MaterialIndicator } from 'react-native-indicators';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';



const { height, width } = Dimensions.get('window');

import { createUser } from '../../action';



class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            password: '',
            error: false,
            loding: false

        };
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }



    };

    renderErrorModal = () => {
        return (

            <Modal
                style={{
                    height: 60,
                    backgroundColor: 'red',
                }}
                position={'bottom'}
                entry={'bottom'}
                isOpen={this.state.error}
                backdrop={true}
                backdropOpacity={0}
                backdropPressToClose={true}
                >

                <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: '600' , fontSize : 12 }}>{this.props.signUpErr}</Text>
                </View>

            </Modal>
        )

    }


    render() {

        return (
            <View style={styles.mainContainer}>

                <KeyboardAvoidingView style={styles.mainContainer}
                    behavior={height < 700 ? "position" : 'padding'}
                >


                    <View style={styles.imgView}>
                        <Image
                            source={require('../../../images/logo.png')}
                            style={styles.imgLogo}
                        />
                        <Text style={styles.imgText}>Citizen Speak</Text>

                    </View>
                    <View style={styles.txtHelloView}>
                        <Text style={styles.txtHello}>Sign Up</Text>
                    </View>

                    <View>

                        <View style={styles.emailView}>
                            <Item regular style={styles.inputItem}>
                                <Input onChangeText={name => {
                                    this.setState({
                                        name: name
                                    })
                                }} style={styles.inputEmail} placeholder='Name' />
                            </Item>
                        </View>


                        <View style={styles.emailView}>
                            <Item regular style={styles.inputItem}>
                                <Input onChangeText={email => {
                                    this.setState({
                                        email: email
                                    })
                                }} style={styles.inputEmail} placeholder='Email Address' />
                            </Item>
                        </View>

                        <View style={styles.pwView}>
                            <Item regular style={styles.inputItem}>
                                <Input onChangeText={password => {
                                    this.setState({
                                        password: password
                                    })
                                }} style={styles.inputEmail} placeholder='Password' secureTextEntry={true} />
                            </Item>
                        </View>

                    </View>




                    <View style={styles.bottomContainer}>
                        <Button disabled={!this.state.email || !this.state.name || this.state.password.length < 6}
                            full
                            style={(!this.state.email || !this.state.name || this.state.password.length < 6) ? styles.btnSignINDisable : styles.btnSignIN}
                            onPress={() => {
                                this.setState({
                                    loding : true,
                                    error: false
                                })
                                this.props.createUser(this.state.email, this.state.password, (res , err) => {
                                    if(res){
                                        console.log('User Created')
                                        this.props.navigation.navigate('SignUpDetail', { name: this.state.name })
                                        this.setState({
                                            loding : false
                                        })
                                    }else{
                                        console.log('Error')
                                        this.setState({
                                            loding :false,
                                            error: true
                                        })
                                    }
                                
                                })
                            }}>
                            {this.state.loding ? (
                                <MaterialIndicator
                                    color="white"
                                    size={25}
                                    trackWidth={2}
                                />
                            ) : <Text style={styles.txtSignIn}>Next</Text>}
                            
                        </Button>

                        <View style={styles.signupHintView}>
                            <Text style={styles.txtNewHere}>
                                New here ?
                            </Text>

                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    error: true
                                })
                            }}>
                                <Text style={styles.txtSignup}>
                                    Sign In
                            </Text>
                            </TouchableOpacity>

                        </View>

                        <View>
                            <Text style={styles.txtRights}>All Right Reserved By Citizen Speak</Text>
                        </View>



                    </View>



                </KeyboardAvoidingView>

                {this.renderErrorModal()}


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
        marginBottom: 10,
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
        marginBottom: (height < 700 ? 10 : 40),
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
    emailView: {
        marginBottom: (height < 700 ? 10 : 20)
    },
    pwView: {
        marginBottom: 10
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
        login: state.user.userLogin,
        signUpErr : state.user.signUperr
    };
};

export default connect(mapStateToProps, { createUser })(SignUp);
