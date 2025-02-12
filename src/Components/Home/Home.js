
import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import { Text, Item, Input, Textarea, Button, Card, CardItem, Body } from 'native-base'
import { ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { MaterialIndicator } from 'react-native-indicators';



const { height, width } = Dimensions.get('window');

const data = ['1', '2']

import { getTrendingTopics, getDevTopics , storeTopic } from '../../action';


class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      loaderTrending: false,
      loaderDev: false



    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false
    }

  };

  openDrawerMenu(){
    this.props.navigation.openDrawer()
  }

  closeDrawer() {
    this.drawer._root.close()
}


  openDrawer() {
    this.drawer._root.open()
}

  componentDidMount() {
    this.setState({
      loaderTrending: true,
      loaderDev: true
    })

    this.props.getDevTopics(() => {
      this.setState({
        loaderDev: false
      })
     // console.log(this.props.devTopics, 'Dev Topics')
    })

    this.props.getTrendingTopics(() => {
      this.setState({
        loaderTrending: false
      })
      //console.log(this.props.trendingTopics)
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.mainView}>

          <View style={styles.leftView}>
            <View style={styles.viewHeader}>
              <TouchableOpacity onPress={()=>{
                this.openDrawerMenu()
              }}>
              <Image
                source={require('../../../images/icons/menu.png')}
                style={styles.menu}
              />
              </TouchableOpacity>
             
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
            {this.state.loaderDev ? <View style={{ marginTop: 30 }}>
              <MaterialIndicator
                color="#FDD62C"
                size={40}
                trackWidth={2}
              />
            </View> :
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.props.devTopics}
                horizontal
                renderItem={({ item, index }) => {

                  return (
                    <View style={styles.developmentCardView}>
                      <Card style={styles.card}>
                        <CardItem style={styles.cardItem}>
                          <Body>
                  <Text style={styles.cardHeading}>{item.title}</Text>
                            <Text style={styles.cardAuthor}>Category : {item.category}</Text>

                          </Body>

                        </CardItem>

                        <View style={styles.progressBar}>

                  <Text style={styles.txtProgressBar}>{item.satus}</Text>

                        </View>
                      </Card>
                    </View>

                  );
                }}
              />
            }
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
            {this.state.loaderTrending ?
              <View style={{ marginTop: 30 }}>
                <MaterialIndicator
                  color="#FDD62C"
                  size={40}
                  trackWidth={2}
                />
              </View>

              :
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.props.trendingTopics}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

                  return (
                    console.log(item , 'Item'),
                    <TouchableOpacity onPress={()=>{
                      this.props.storeTopic(item,()=>{
                        this.props.navigation.navigate('TopicDetail')
                      })
                   
                    }}>
                             <View style={styles.developmentCardView}>
                      <Card style={styles.card}>
                        <CardItem style={styles.cardItem}>
                          <Body>
                            <Text style={styles.cardHeading}>{item.title}</Text>
                            <Text style={styles.cardAuthor}>Category : {item.category}</Text>

                          </Body>

                        </CardItem>

                        <View style={styles.progressBarIdea}>

                          <Text style={styles.txtProgressBarIdea}>{item.satus}</Text>

                        </View>
                      </Card>
                    </View>
                    </TouchableOpacity>
             

                  );
                }}
              />
            }
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
    marginTop: 5,
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
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: '700',
    color: 'white'
  },
  txtProgressBarIdea: {
    textTransform: 'capitalize',
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
  }
})


const mapStateToProps = state => {
  return {
    login: state.user.userLogin,
    trendingTopics: state.user.trendingTopics,
    devTopics: state.user.devTopics


  };
};

export default connect(mapStateToProps, { getTrendingTopics, getDevTopics , storeTopic})(Home);
