
import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, FlatList, KeyboardAvoidingView } from 'react-native'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('window');

const data = ['1', '2']

class CreateTopic extends Component {


    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }

    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.mainView}>

                    <View style={styles.leftView}>
                        <View style={styles.viewHeader}>
                            <Image
                                source={require('../../../images/icons/menu.png')}
                                style={styles.menu}
                            />
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

                <View style={styles.header}>
                    <View style={styles.categoryLeftView}>
                        <Text style={styles.txtInProgress}>Creating Topic</Text>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>


                    <KeyboardAvoidingView style={styles.mainContainer}
                        behavior={'padding'}
                    >
                        <View>
                            <View style={styles.viewdetailform}>
                                <Item regular style={styles.inputItem}>
                                    <Input style={styles.inputTxt} placeholder='Title*' />
                                </Item>

                                <Item regular style={styles.inputItem}>
                                    <Input style={styles.inputTxt} placeholder='Category*' />
                                </Item>

                                <Item regular style={styles.inputItem}>
                                    <Input style={styles.inputTxt} placeholder='Imapct Level*' />
                                </Item>

                                <Item regular style={styles.inputItem}>
                                    <Textarea blurOnSubmit={true} multiline={true} rowSpan={10} style={styles.txtBio} placeholder='Issue Descrption*' />
                                </Item>

                                <Item regular style={styles.inputItem}>
                                    <Textarea blurOnSubmit={true} multiline={true} rowSpan={15} style={styles.txtBio} placeholder='Your Idea..*' />
                                </Item>



                            </View>


                            <View style={styles.header}>
                                <View style={styles.categoryLeftView}>
                                    <Text style={styles.txtUploadImage}>Optinal :Upload Images / Videos (Max 50Mb)</Text>
                                </View>

                                <TouchableOpacity>
                                    <View style={styles.addIcon}>
                                        <Text style={styles.plus}>+</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.viewNote}>
                                    <Text style={styles.txtNote}>Note : Your idea will be pending stage until government will approve!</Text>
                                </View>

                                <View style={styles.viewNote}>
                                    <Text style={styles.txtdisclaimer}>By submiting, you confirm that you agree to our Terms and Privacy Policy.</Text>
                                </View>


                            </View>



                            <View style={styles.bottomContainer}>
                                <Button full style={styles.btnSaveDraft} onPress={() => {
                                    this.props.navigation.navigate('Guide')
                                }}>
                                    <Text style={styles.txtSignIn}>Save Draft</Text>
                                </Button>

                                <Button full style={styles.btnSubmit} onPress={() => {
                                    this.props.navigation.navigate('Guide')
                                }}>
                                    <Text style={styles.txtSignIn}>Submit</Text>
                                </Button>
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
        // borderColor:  'green',
        //  borderWidth : 1,
        marginLeft: 20,
        justifyContent: 'center'

    },
    txtName: {
        color: '#464646',
        fontWeight: '700',
        fontSize: (width < 350 ? 24 : 30)
    },
    menu: {
        alignSelf: 'center',
        height: 30,
        width: 30
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
        justifyContent: 'center',
        //borderColor: 'red',
        // borderWidth: 1,
    },
    rightView: {
        width: 100,
        // borderColor:  'green',
        // borderWidth : 1,
    },
    mainView: {
        marginTop: 50,
        // borderColor: 'red',
        //borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        marginTop: 20
    },
    categoryLeftView: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewNote:{
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtInProgress: {
        fontWeight: '700',
        fontSize: 24
    },
    txtUploadImage: {
        color: '#737070',
        marginLeft: 20,
        fontSize: 12
    },
    txtNote: {

        marginRight : 20,
        fontWeight : '600',
        color: '#737070',
        marginLeft: 20,
        fontSize: 12
    },
    txtdisclaimer: {
        textAlign : 'center' ,
        marginRight : 20,
        fontWeight : '600',
        color: '#737070',
        marginLeft: 20,
        fontSize: 12
    },
    btnViewAll: {
        backgroundColor: '#FDD62B',
        marginRight: 20,
        width: 100,
        height: 30,
        justifyContent: 'center'
    },
    btntxt: {
        textAlign: 'center',
        fontSize: 16,
        color: '#464646'
    },
    developmentCardView: {
        marginTop: 30,
        //  height : 100,
        // borderColor : 'green',
        // borderWidth  :1
    },
    card: {
        //borderColor : 'red',
        borderRadius: 10,
        width: 225,
        marginRight: 20,
        marginLeft: 20
    },
    cardItem: {
        borderRadius: 10,
    },
    cardHeading: {
        fontSize: 16,
        fontWeight: '600',
        color: '#464646'
    },
    cardAuthor: {
        fontSize: 12
    },
    progressBar: {
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 30,
        backgroundColor: '#2AC940'
    },
    txtProgressBar: {
        textAlign: 'center',
        fontWeight: '700',
        color: 'white'
    },
    txtProgressBarIdea: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#464646'
    },
    progressBarIdea: {
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 30,
        backgroundColor: '#FDD62C'
    },
    titleHeader: {
        marginTop: 40
    },
    title: {
        marginLeft: 20,
    },
    hintTxt: {
        marginTop: 10,
        fontSize: 14,
        marginRight: 20,
    },
    btnStartTopic: {
        marginTop: 20,
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: '#FDD62B',
    },
    txtStartTopic: {
        fontSize: 24,
        color: '#464646',
        fontWeight: '700'
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
        flexDirection : 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    btnSaveDraft: {
        width : width * 0.35,
        borderRadius: 10,
        marginLeft :40,
       //marginRight :40,
        marginBottom: 10,
        backgroundColor: '#FDD62B',

    },
    btnSubmit: {
        width : width * 0.35,
        borderRadius: 10,
       //marginLeft :40,
       marginRight :40,
        marginBottom: 10,
        backgroundColor: '#FDD62B',

    },
    txtSignIn: {
        fontSize: 16,
        fontWeight: '700',
        color: '#464646'
    },
    addIcon:{
        flexDirection : 'row',
        marginTop: 20,
        marginLeft: 40,
        height : 75,
        width : 75,
        borderRadius : 10,
        backgroundColor : '#C8C8C8',
        justifyContent: 'center'
    },plus:{
        textAlign : 'center',
        alignSelf : 'center',
        fontSize : 24,
        color : 'white'
    }
})

export default CreateTopic;