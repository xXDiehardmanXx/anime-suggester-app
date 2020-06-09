import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
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
        fetch(ANIME_SEARCH + this.state.search + '&limit=25')
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
                <View style={{ marginTop: 10 }}>
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
    }
})

export default Search