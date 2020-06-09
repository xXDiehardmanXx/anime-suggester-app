import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Card, Button, ListItem } from 'react-native-elements'

class Questions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Card title={this.props.node.question}>
                    {
                        this.props.node.yes.map((u, index) => {           
                            return (
                                <View key={index}>
                                    <Text>{u.id}</Text>
                                </View>
                            )
                        })
                    }
                    <View style={styles.buttonView}>
                        <Button raised title='Yes' /> 
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            raised
                            title='No'
                            onPress={this.props.change} />
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        margin: 4
    },
    results: {

    }
})


export default Questions