import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Tile, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

class Home extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <View style={styles.container}>
              <StatusBar backgroundColor='#6948f4' barStyle='light-content' />
                <View>
                    <Text style={{ padding: 10, fontWeight: 'bold', paddingBottom: 0 }}>My Favorites:</Text>
                    <ScrollView
                        horizontal>
                        <Tile
                        title='Gintama'
                        imageSrc={require('../assets/images/gintama.jpg')}
                        width={200}
                        height={300}
                        imageContainerStyle={{ margin: 10 }}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}>
                        </Tile>
                        <Tile
                        title='Code Geass'
                        imageSrc={require('../assets/images/codegeass.jpg')}
                        width={200}
                        height={300}
                        imageContainerStyle={{ margin: 10 }}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}>
                        </Tile>
                        <Tile
                        title='Engaveleon'
                        imageSrc={require('../assets/images/gintama.jpg')}
                        width={200}
                        height={300}
                        imageContainerStyle={{ margin: 10 }}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}>
                        </Tile>
                    </ScrollView>
                </View>
            <View style={styles.buttonView}>
            <Button
                large
                raised
                title=' Suggest me an Anime'
                buttonStyle={{ height: 55 }}
                icon={<Icon name='film' type='font-awesome' color='white' size={20} />}
                onPress={() => this.props.navigation.navigate('Suggest')} />
        </View>
        <View style={styles.buttonView}>
            <Button
              large
              raised
              title=' Anime Quizzes and Games'
              buttonStyle={{ height: 55 }}
              icon={<Icon name='trophy' color='white' type='font-awesome' size={20} />} />
        </View>
        <View style={styles.buttonView}>
            <Button
              large
              raised
              title=' Search Anime'
              buttonStyle={{ height: 55 }}
              icon={<Icon name='search' color='white' type='font-awesome' size={20} />}
              onPress={() => this.props.navigation.navigate('Search')} />
        </View>
        <View style={styles.buttonView}>
            <Button
              large
              raised
              title=' Friend List'
              buttonStyle={{ height: 55 }}
              icon={<Icon name='users' type='font-awesome' color='white' size={20} />} />
        </View>
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingRight: 20,
      paddingLeft: 20
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
    buttonView: {
      marginTop: 20
    }
  })

export default Home