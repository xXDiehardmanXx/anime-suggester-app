import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Tile, Button, Icon, SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { ANIME_SEARCH } from '../constants/url'
import AnimeSearchResults from '../components/AnimeSearchResults'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            response: {},
        }
    }

    updateSearch = search => {
        this.setState({ search })
        if (this.state.search.length <= 2) {
            return
        }
        fetch(ANIME_SEARCH + this.state.search + '&limit=16')
            .then(response => response.json())
            .then(response => {
                this.setState({ response: response })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { search } = this.state

        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor='#6948f4' barStyle='light-content' />
                <View style={{ marginTop: 20 }}>
                    <SearchBar
                        placeholder='Search Anime...'
                        onChangeText={this.updateSearch}
                        value={search}
                        platform='default'
                        lightTheme />
                </View>
                <View>
                    <AnimeSearchResults
                        show={ this.state.search.length > 3 }
                        animes={this.state.response['results']} />
                </View>
            </ScrollView>
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

export default Search