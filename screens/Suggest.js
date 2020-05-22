import React, { Component } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Quiz from '../components/Quiz'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExtendedVersion: false
        }
    }

    changeVersion = () => {
        this.setState({ isExtendedVersion: !this.state.isExtendedVersion })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.heading}>
                    <Text>Quiz:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Extended Version?</Text>
                        <Switch
                            onValueChange={this.changeVersion}
                            value={this.state.isExtendedVersion} />
                    </View>
                </View>
                <Quiz type={this.state.isExtendedVersion} />
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
    heading: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10
    }
})


export default Search