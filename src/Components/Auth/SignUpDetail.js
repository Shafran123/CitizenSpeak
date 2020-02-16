import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text, Item, Input, Textarea , Button } from 'native-base'
import { MaterialIndicator } from 'react-native-indicators';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

import { saveUserData } from '../../action';


class SignUpDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }



    };

    constructor(props) {
        super(props);

        this.state = {
            fullName: null,
            jobRole: null,
            company: null,
            city: null,
            bio: null,
            loader : false,
            error: false

        };
    }

    componentDidMount(){
      
    }

    render() {
        const name = this.props.navigation.getParam('name', null);
        return (
            <View style={styles.container}>

                <View style={styles.mainView}>


                    <View style={styles.leftView}>
                        <View style={styles.viewHeader}>
                            <Text style={styles.txtName}>Hi , {name}</Text>
                        </View>

                        <View style={styles.viewSubHeader}>
                            <Text style={styles.txtSubHead}>We Need More Details About You!</Text>
                        </View>

                    </View>


                    <View style={styles.rightView}>
                        <Image
                            source={require('../../../images/logo.png')}
                            style={styles.miniLogo}
                        />
                        <Text style={styles.miniLogotxt}>Citizen Speak</Text>
                    </View>

                </View>

            

                <ScrollView>
                <KeyboardAvoidingView style={styles.mainContainer}
                    behavior={height <  700 ? 'null' : 'padding'}
                >

                    <View>
                        <View style={styles.viewdetailform}>
                            <Item regular style={styles.inputItem}>
                                <Input onChangeText={fullName=>{
                                    this.setState({
                                        fullName : fullName
                                    })
                                }} style={styles.inputTxt} placeholder='Name*' />
                            </Item>

                            <Item regular style={styles.inputItem}>
                                <Input 
                                onChangeText={jobRole=>{
                                    this.setState({
                                        jobRole : jobRole
                                    })
                                }}
                                style={styles.inputTxt} placeholder='Job Role*' />
                            </Item>

                            <Item regular style={styles.inputItem}>
                                <Input 
                                onChangeText={company=>{
                                    this.setState({
                                        company : company
                                    })
                                }}
                                style={styles.inputTxt} placeholder='Organization / Company*' />
                            </Item>

                            <Item regular style={styles.inputItem}>
                                <Input
                                onChangeText={city=>{
                                    this.setState({
                                        city : city
                                    })
                                }}
                                style={styles.inputTxt} placeholder='City*' />
                            </Item>

                            <Item regular style={styles.inputItem}>
                                <Textarea 
                                onChangeText={bio=>{
                                    this.setState({
                                        bio : bio
                                    })
                                }} blurOnSubmit={true} multiline={true} rowSpan={10} style={styles.txtBio} placeholder='Bio*' />
                            </Item>



                        </View>



                        <View style={styles.bottomContainer}>
                        <Button full style={ (!this.state.fullName || !this.state.jobRole || !this.state.company || !this.state.city || !this.state.bio) ? styles.btnSignINDisable : styles.btnSignIN}
                        disabled={!this.state.fullName || !this.state.jobRole || !this.state.company || !this.state.city || !this.state.bio}
                        onPress={()=>{
                            this.setState({
                                loader : true,
                                error : false
                            })
                            this.props.saveUserData(this.state.fullName , this.state.jobRole , this.state.company , this.state.city , this.state.bio , (res , err)=>{
                                if(res){
                                    this.props.navigation.navigate('Guide')
                                    this.setState({
                                        loader : false
                                    })
                                }else{
                                    this.setState({
                                        error : true
                                    })
                                }
                                
                            })
                           
                        }}>
                          {this.state.loader ? (
                               <MaterialIndicator
                               color="white"
                               size={25}
                               trackWidth={2}
                           />
                          ) : 
                          <Text style={styles.txtSignIn}>Done</Text>
                          }   
                        </Button>

                        <View>
                            <Text style={styles.txtRights}>All Right Reserved By Citizen Speak</Text>
                        </View>

                    </View>

                    </View>
                    </KeyboardAvoidingView>
                    
                </ScrollView>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewHeader: {
        //  borderColor:  'green',
        //   borderWidth : 1,
        marginLeft: 15,

    },
    txtName: {
        fontWeight: '700',
        fontSize: 30
    },
    viewSubHeader: {
        marginLeft: 15,
    },
    txtSubHead: {
        //  borderColor: 'red',
        //  borderWidth: 1,
        fontSize: 14
    },
    miniLogo: {
        alignSelf: 'center',
        height: 50,
        width: 75
    },
    miniLogotxt: {
        textAlign: 'center',
        fontSize: 8
    },
    leftView: {
        justifyContent: 'space-between'
    },
    rightView: {
        width: 100,
        // borderColor:  'green',
        // borderWidth : 1,
    }, mainView: {
        marginTop: 50,
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewdetailform: {
        marginTop: 20
    },
    inputItem: {
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 10,
        marginBottom: 20
        //  borderColor: '#464646',
    },
    inputTxt: {
        fontSize: 14,
        color: '#464646',
    },
    txtBio: {

        fontSize: 14,
        color: '#464646',
    },
    bottomContainer: {
        marginTop : 40,
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
    txtRights: {
        color: '#464646',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 12
    },
    btnSignINDisable: {
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        backgroundColor: '#b5b5b5',
    },

})


const mapStateToProps = state => {
    return {
        login: state.user.userLogin,
        
    };
};

export default connect(mapStateToProps, { saveUserData })(SignUpDetail);
