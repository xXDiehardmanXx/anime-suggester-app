import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Tile, Button, Icon, SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

class AnimeSearchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.show && this.props.animes) {
            return (
                <ScrollView>
                    <Text>{this.props.animes[0]['title']}</Text>
                    <Text>{this.props.animes[1]['title']}</Text>
                    <Text>{this.props.animes[2]['title']}</Text>
                    <Text>{this.props.animes[3]['title']}</Text>
                    <Text>{this.props.animes[4]['title']}</Text>
                    <Text>{this.props.animes[5]['title']}</Text>
                </ScrollView>
            )
        } else {
            return <></>
        }
    }
}

export default AnimeSearchResults