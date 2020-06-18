import React from 'react'
import { Text, View, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Button, Icon } from 'react-native-elements'

class AnimeSearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            selectedAnime: 0
        }
    }

    handleCardPress = index => {
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
                            <View style={styles.titleDiv}>
                                <Text style={styles.titleText}> 
                                    {this.props.animes[this.state.selectedAnime]['title']}
                                </Text>                         
                                <Text style={styles.dateText}>
                                    {this.props.animes[this.state.selectedAnime]['start_date'].substring(0,4)}
                                </Text>
                            </View>
                            <View style={styles.imgDiv}>
                                <Image style={styles.titleImage} source={{uri: this.props.animes[this.state.selectedAnime]['image_url'] }}/>
                                <View>
                                    <Text style={styles.subText}>Score:</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' color='#FFD700' size={12} type='font-awesome' style={{ marginTop: 9, marginLeft: 4 }} />
                                        <Text style={styles.stdText} >   
                                            {this.props.animes[this.state.selectedAnime]['score']}
                                        </Text>
                                    </View>
                                    <Text style={styles.subText}>Type:</Text>
                                    <Text style={styles.stdText} >
                                        {this.props.animes[this.state.selectedAnime]['type']}
                                    </Text>
                                    <Text style={styles.subText}>Episodes:</Text>
                                    <Text style={styles.stdText} > 
                                        {this.props.animes[this.state.selectedAnime]['episodes']}
                                    </Text>
                                    <Text style={styles.subText}>Airing:</Text>
                                    <Text style={styles.stdText} > 
                                        {this.props.animes[this.state.selectedAnime]['airing'] ? 'Yes' : 'No'}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.stdText}>Synopsis:</Text>
                                <Text style={styles.synopsisStyle}>
                                    {this.props.animes[this.state.selectedAnime]['synopsis'].substring(0,512)+'...'}
                                </Text>
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

const styles = StyleSheet.create({
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
    stdText : {
        fontSize : 20,
        marginBottom: 5,
        marginRight: 50,
        paddingLeft: 5
    },
    titleImage : {
        marginRight: 6,
        width : 160,
        height : 210,

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
        marginLeft : 5

    }
})

export default AnimeSearchResults