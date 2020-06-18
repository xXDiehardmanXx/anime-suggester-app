import React from 'react'
import { View, StyleSheet, Modal, Text, Image } from 'react-native'
import { Card, Button, ListItem, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { ANIME_DATA } from '../assets/animeData/animeData'

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedAnime: 1
        }
    }

    openModal = index => {
        this.setState({
            showModal: true,
            selectedAnime: index
        })
    }

    render() {
        return (
            <ScrollView>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.setState({ showModal: false })}
                    onRequestClose={() => this.setState({ showModal: false })}>
                        <ScrollView>
                            <View style={styles.titleDiv}>
                                <Text style={styles.titleText}> 
                                    {ANIME_DATA[this.state.selectedAnime]['title']}
                                </Text>                         
                                <Text style={styles.dateText}>
                                    {ANIME_DATA[this.state.selectedAnime]['aired']['from'].substring(0,4)}
                                </Text>
                            </View>
                            <View style={styles.imgDiv}>
                                <Image style={styles.titleImage} source={{uri: ANIME_DATA[this.state.selectedAnime]['image_url'] }}/>
                                <View style={{ paddingTop: 5 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' color='#FFD700' size={12} type='font-awesome' style={{ marginTop: 9, marginLeft: 4 }} />
                                            <Text style={styles.scoreText} >   
                                                {ANIME_DATA[this.state.selectedAnime]['score']}
                                            </Text>
                                    </View>
                                    <Text style={styles.linkText}>
                                        Ranked #{ANIME_DATA[this.state.selectedAnime]['rank']}
                                    </Text>
                                    <Text style={styles.stdText} >
                                        {ANIME_DATA[this.state.selectedAnime]['type']} ({ANIME_DATA[this.state.selectedAnime]['episodes']}eps)
                                    </Text>
                                    <Text style={styles.subText}>
                                        Aired
                                    </Text>
                                    <Text style={styles.linkText}>
                                        {ANIME_DATA[this.state.selectedAnime]['premiered']}
                                    </Text>
                                    <Text style={styles.subText}>
                                        Studio
                                    </Text>
                                    <Text style={styles.linkText}>
                                        {ANIME_DATA[this.state.selectedAnime]['studios'][0]['name']}
                                    </Text>
                                    <Text style={styles.stdText} > 
                                        {ANIME_DATA[this.state.selectedAnime]['airing'] ? 'Yes' : 'No'}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.stdText}>Synopsis:</Text>
                                <Text style={styles.synopsisStyle}>
                                    {ANIME_DATA[this.state.selectedAnime]['synopsis'].substring(0,150) + '...'}
                                </Text>
                            </View>
                        </ScrollView>
                    <Button title='close' onPress={() => this.setState({ showModal: false })} />
                </Modal>
                <Card title={this.props.node.question}>
                    {
                        this.props.node.yes.map((u, index) => {           
                            return (
                                <ListItem
                                    key={index}
                                    title={ANIME_DATA[u.id]['title']}
                                    bottomDivider
                                    onPress={() => this.openModal(ANIME_DATA[u.id]['mal_id'])}
                                    rightIcon={<Icon name='chevron-right' color='gray' size={11} type='font-awesome' />}
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        margin: 4,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingRight: 20,
      paddingLeft: 20
    },
    titleText : {
        fontSize: 25,
        fontWeight: 'bold',
    },
    scoreText : {
        fontSize : 20,
        paddingLeft: 5
    },
    titleImage : {
        marginRight: 6,
        width : 176,
        height : 231
    },
    synopsisStyle : {
        fontStyle : 'italic',
        marginRight : 10,
        marginLeft : 10,
        fontSize : 14,
        marginBottom : 6
    },
    stdDate : {
        fontSize : 16,
        marginBottom : 3
    },
    stdRating : {
        fontSize : 15,
        fontWeight : 'bold'
    },
    imgDiv: {
        flexDirection: 'row'
    },
    titleDiv: {
        backgroundColor: '#E1E7F5',
        padding: 8
    },
    dateText: {
        fontSize: 14
    },
    subText: {
        fontSize: 12,
        marginLeft : 5,
        marginTop: 5,
        color: 'gray'
    },
    linkText: {
        color: '#0645AD',
        paddingLeft: 5,
        fontSize : 16,
        paddingTop: 0,
        marginBottom: 5
    },
    stdText: {
        fontSize : 16,
        paddingLeft: 5,
        marginTop: 5
    }
})
export default Questions