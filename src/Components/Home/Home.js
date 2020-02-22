
import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


const { height, width } = Dimensions.get('window');

const data = ['1', '2']

class Home extends Component {


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

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Development */}

          <View style={styles.header}>
            <View style={styles.categoryLeftView}>
              <Text style={styles.txtInProgress}>Development</Text>
              <Button style={styles.btnViewAll}>
                <Text style={styles.btntxt}>View All</Text>
              </Button>
            </View>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              horizontal
              renderItem={({ item, index }) => {

                return (
                  <View style={styles.developmentCardView}>
                    <Card style={styles.card}>
                      <CardItem style={styles.cardItem}>
                        <Body>
                          <Text style={styles.cardHeading}>Smart Plant</Text>
                          <Text style={styles.cardAuthor}>Idea By : Shafran</Text>

                        </Body>

                      </CardItem>

                      <View style={styles.progressBar}>

                        <Text style={styles.txtProgressBar}>In Progress</Text>

                      </View>
                    </Card>
                  </View>

                );
              }}
            />
          </View>


          {/* Trending Topics */}

          <View style={styles.header}>
            <View style={styles.categoryLeftView}>
              <Text style={styles.txtInProgress}>Trending Topics</Text>
              <Button style={styles.btnViewAll}>
                <Text style={styles.btntxt}>View All</Text>
              </Button>
            </View>
          </View>


          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              horizontal
              renderItem={({ item, index }) => {

                return (
                  <View style={styles.developmentCardView}>
                    <Card style={styles.card}>
                      <CardItem style={styles.cardItem}>
                        <Body>
                          <Text style={styles.cardHeading}>Recycle Plastic for better sri lanka</Text>
                          <Text style={styles.cardAuthor}>Idea By : Shafran</Text>

                        </Body>

                      </CardItem>

                      <View style={styles.progressBarIdea}>

                        <Text style={styles.txtProgressBarIdea}>IDEA STAGE</Text>

                      </View>
                    </Card>
                  </View>

                );
              }}
            />
          </View>

          <View style={styles.titleHeader}>
            <View style={styles.title}>
              <Text style={styles.txtInProgress}>Wanna Make Sri Lanka Better Place?</Text>
              <Text style={styles.hintTxt}>Submit your idea and discuss with community SriLankan Government will review your idea.</Text>
              <Button full style={styles.btnStartTopic} onPress={() => {
                //AsyncStorage.clear();
                this.props.navigation.navigate('CreateTopic')
              }}>
                <Text style={styles.txtStartTopic}>Start a topic</Text>
              </Button>
            </View>
          </View>

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
  txtInProgress: {
    fontWeight: '700',
    fontSize: 24
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
  txtStartTopic:{
    fontSize : 24,
    color : '#464646',
    fontWeight : '700'
  }
})

export default Home;