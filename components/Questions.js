import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Card, Button, ListItem } from 'react-native-elements'
import { ANIME_DATA } from '../assets/animeData/animeData'

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
                                <ListItem
                                    key={index}
                                    title={ANIME_DATA[u.id]['title']}
                                    bottomDivider
                                    leftAvatar={{ rounded: true ,source: { uri: ANIME_DATA[u.id]['image_url'] } }} />
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
                <Button
                    raised
                    title='Reset Quiz'
                    onPress={this.props.reset} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        margin: 4,
    },
    results: {

    }
})


export default Questions