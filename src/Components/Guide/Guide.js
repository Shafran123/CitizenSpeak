import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Text, Item, Input, Textarea, Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

class Guide extends Component {

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
                            <Text style={styles.txtName}>Welcome, Shafran</Text>
                        </View>

                        <View style={styles.viewSubHeader}>
                            <Text style={styles.txtSubHead}>This is How You Can User Citizen Speak</Text>
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
                    <View style={styles.txtGuideView}>
                        <Text style={styles.txtGuide}>Guide</Text>
                    </View>


                    <View style={styles.viewTip}>
                        <Text style={styles.txtTipHeader}>Submit Your Valuble Idea</Text>
                        <Text style={styles.txtTipContent}>If you have idea that can make srilanka better yes tell us we are ready to hear you!</Text>
                    </View>

                    <View style={styles.viewTip}>
                        <Text style={styles.txtTipHeader}>Wait For Confirmation</Text>
                        <Text style={styles.txtTipContent}>Once you submitted the idea government officials will recive your idea and problem that your trying to resolve. In this period your idea will be Pending Stage. You can discuss with many citizen speak users while this period. Government officials will look all the discussion top to bottom.once goverment approved your idea it will approved stage.</Text>
                    </View>

                    <View style={styles.viewTip}>
                        <Text style={styles.txtTipHeader}>Monitor Progesss</Text>
                        <Text style={styles.txtTipContent}>After your ideas was approved. it will take some time to make government to mark as in progress.</Text>
                    </View>

                    <View style={styles.viewTip}>
                        <Text style={styles.txtTipHeader}>Contribute Others Ideas</Text>
                        <Text style={styles.txtTipContent}>You can always add your valuble comments to others ideas</Text>
                    </View>
                </ScrollView>


                <View style={styles.bottomContainer}>
                    <Button full style={styles.btnSignIN} onPress={() => {
                        this.props.navigation.navigate('Guide')
                    }}>
                        <Text style={styles.txtSignIn}>Got It</Text>
                    </Button>

                    <View>
                        <Text style={styles.txtRights}>All Right Reserved By Citizen Speak</Text>
                    </View>

                </View>



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
        fontSize: (width < 350 ? 24 : 30)
    },
    viewSubHeader: {
        marginLeft: 15,
    },
    txtSubHead: {
        //  borderColor: 'red',
        //  borderWidth: 1,
        fontSize: (width < 350 ? 11 : 14)
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
        marginTop: 20,
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
    }, txtGuideView: {
        marginTop: 20
    },
    txtGuide: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 50,
        color: '#2AC940'
    }, viewTip: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    txtTipHeader: {
        fontWeight: '600',
        fontSize: 24,
        color: '#464646'
    },
    txtTipContent: {
        marginTop: 5,
        fontSize: 12,
        color: '#464646'
    }

})

export default Guide