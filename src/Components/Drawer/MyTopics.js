import React, { Component } from 'react'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { View, Image, TouchableHighlight, StyleSheet ,FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { MaterialIndicator } from 'react-native-indicators';



import { fetchPendingTopics } from '../../action';


class MyTopics extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            loader: false



        };
    }

    componentDidMount() {

        this.setState({
            loader: true
        })

        this.props.fetchPendingTopics(() => {
            this.setState({
                loader: false
            })
        })
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <Button transparent onPress={() => { navigation.navigate('Home') }}>
                    <Text style={{ color: 'blue' }}>Back</Text>
                </Button>
            ),
        };
    };



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainView}>


                    <View style={styles.leftView}>
                        <View style={styles.viewHeader}>
                            <Text style={styles.txtName}>My Ideas</Text>
                        </View>

                        <View style={styles.viewSubHeader}>
                            <Text style={styles.txtSubHead}>Manage Your Ideas Here</Text>
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
                {this.state.loader ?
                    <MaterialIndicator
                        color="#FDD62C"
                        size={40}
                        trackWidth={2}
                    /> :

                    <ScrollView>

                        <View style={{ marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: '#464646' }}>
                                Pending Submissions
                    </Text>

                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={this.props.pendingTopics}
                            
                                renderItem={({ item, index }) => {

                                    return (
                                        <View style={{marginTop: 10}}>
                                            {/* <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                                            </View> */}

                                            <View>
                                                <Text style={{ fontWeight: '700', marginBottom: 5, marginTop: 5, color: '#464646' }}>
                                                    02 Fed 2020
                                                    </Text>
                                                <Text style={{ color: '#464646', fontSize: 16 }}>
                                                   {item.title}
                                                </Text>
                                            </View>

                                            <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                                            </View>
                                        </View>

                                    );
                                }}
                            />
                        </View>


                        <View style={{ marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: '#464646' }}>
                                Approved Submissions
                    </Text>

                            <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                            </View>

                            <View>
                                <Text style={{ fontWeight: '700', marginBottom: 5, marginTop: 5, color: '#464646' }}>
                                    02 Fed 2020
                        </Text>
                                <Text style={{ color: '#464646', fontSize: 16 }}>
                                    Recycle Plastic for better sri lanka
                        </Text>
                            </View>

                            <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                            </View>

                        </View>

                        <View style={{ marginLeft: 15, marginTop: 20, marginRight: 15 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#464646' }}>
                                Drafts
                    </Text>

                            <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                            </View>

                            <View>
                                <Text style={{ fontWeight: '700', marginBottom: 5, marginTop: 5, color: '#464646' }}>
                                    02 Fed 2020
                        </Text>
                                <Text style={{ color: '#464646', fontSize: 16 }}>
                                    Recycle Plastic for better sri lanka
                        </Text>
                            </View>

                            <View style={{ marginTop: 10, height: 1, backgroundColor: '#808080', opacity: 0.3 }}>

                            </View>

                        </View>

                    </ScrollView>
                }
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
        fontSize: 30,
        color: '#464646'
    },
    viewSubHeader: {
        marginLeft: 15,
    },
    txtSubHead: {
        //  borderColor: 'red',
        //  borderWidth: 1,
        fontSize: 14,
        color: '#464646'
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
        marginTop: 10,
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

const mapStateToProps = state => {
    return {
        login: state.user.userLogin,
        pendingTopics: state.user.pendingTopics
    };
};

export default connect(mapStateToProps, { fetchPendingTopics })(MyTopics);


