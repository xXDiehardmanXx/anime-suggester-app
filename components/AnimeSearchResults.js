import React from 'react'
import { Text, View, TouchableOpacity, Modal, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Button } from 'react-native-elements'

class AnimeSearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedAnime: 0
        }
    }

    handleCardPress = (index) => {
        this.setState({
            showModal: true,
            selectedAnime: index
        })
    }

    render() {
        if (this.props.show && this.props.animes) {
            return (
                <ScrollView>
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={this.state.showModal}
                        onDismiss={() => this.setState({ showModal: false })}
                        onRequestClose={() => this.setState({ showModal: false })}>
                        <View>
                            <Text>{this.props.animes[this.state.selectedAnime]['title']}</Text>
                        </View>
                        <Button title='close' onPress={() => this.setState({ showModal: false })} />
                    </Modal>
                    {
                        this.props.animes.map((id, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={() => this.handleCardPress(index)}>
                                        <Card
                                            featuredTitle={(this.props.animes[index]['title'].length < 28) ? this.props.animes[index]['title'] : this.props.animes[index]['title'].substring(0, 27) + '...'}
                                            image={{ uri: this.props.animes[index]['image_url'] }} >
                                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                                    <Text>{this.props.animes[index]['type']} {this.props.animes[index]['episodes']}eps</Text>
                                                    <Text style={{textAlign: 'right'}}>Score: {this.props.animes[index]['score']}</Text>
                                                </View>
                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            )
        } else {
            return <></>
        }
    }
}

export default AnimeSearchResults