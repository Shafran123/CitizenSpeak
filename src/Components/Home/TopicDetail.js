import React, { Component } from 'react'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { View, Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { MaterialIndicator } from 'react-native-indicators';


import { storeTopic, getAuthor } from '../../action';


class TopicDetail extends React.Component {


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


        this.props.getAuthor(this.props.details.uid, () => {
            this.setState({
                loader: false
            })
        })
        console.log(this.props.details)
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
                            <Text style={styles.txtName}>{this.props.details.title}</Text>
                        </View>
                    </View>


                </View>
                {this.state.loader ? <MaterialIndicator
                    color="#FDD62C"
                    size={40}
                    trackWidth={2}
                /> :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={styles.viewSubHeader}>
                                <Text style={styles.txtSubHead}>Topic By : {this.props.author.FullName} </Text>
                                <Text style={styles.txtSubHead}>Submitted Date : </Text>
                            </View>

                            <View style={{ justifyContent: 'center', marginRight: 15 }}>
                                <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center', alignSelf: 'center' }}>
                                    145{`\n`} Votes
                            </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                Problem Description
                    </Text>
                            <Text style={{ marginTop: 10 }}>
                                {this.props.details.desc_issue}
                            </Text>

                        </View>

                        <View style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                Idea...
                    </Text>
                            <Text style={{ marginTop: 10 }}>
                                {this.props.details.desc_idea}
                            </Text>

                        </View>

                        <Button full style={{ margin: 30, borderRadius: 10, backgroundColor: '#2AC940' }} onPress={() => {
                            console.log('hey')
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Up Vote!</Text>
                        </Button>

                        <View style={{ marginBottom: 10, marginLeft: 15, marginRight: 15, height: 1, backgroundColor: 'grey', opacity: 0.4 }}></View>

                        <View style={{ marginRight: 15, marginBottom: 20 }}>
                            <Text style={{ textAlign: 'right' }}>
                                This is a Great Idea!
                  </Text>
                            <Text style={{ textAlign: 'right', fontSize: 10, marginTop: 5 }}>
                                Shafran Naizer
                  </Text>
                        </View>

                        <View style={{ marginLeft: 15, marginRight: 15 }}>
                            <Textarea
                                blurOnSubmit={true} multiline={true} rowSpan={5} style={{ borderColor: 'grey', borderWidth: 1, borderRadius: 10 }} placeholder='Comment*' />

                            <View style={{ alignSelf: 'flex-end' }}>
                                <Button full style={{ marginTop: 20, marginBottom: 20, borderRadius: 10, backgroundColor: '#FDD62B' }} onPress={() => {
                                    console.log('hey')
                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#464646' }}>Comment!</Text>
                                </Button>
                            </View>
                        </View>



                    </ScrollView>
                }
                <View style={{ width: '100%', backgroundColor: '#FDD62B', height: 50, shadowColor: 'grey', shadowOpacity: 0.4, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', textTransform: 'capitalize', fontSize: 20, fontWeight: '700' }}>
                        {this.props.details.satus}
                    </Text>
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
        // borderColor:  'green',
        // borderWidth : 1,
        marginLeft: 15,

    },
    txtName: {
        fontWeight: '700',
        fontSize: 20,
        color: '#464646'
    },
    viewSubHeader: {
        //   marginTop: 10,
        marginLeft: 15,
    },
    txtSubHead: {
        marginTop: 5,
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
        width: '100%',
        marginTop: 10,
        // borderColor: 'red',
        // borderWidth: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
})

const mapStateToProps = state => {
    return {
        //      login: state.user.userLogin,
        details: state.user.detailedTopic,
        author: state.user.author
    };
};

export default connect(mapStateToProps, { storeTopic, getAuthor })(TopicDetail);
