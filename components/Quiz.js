import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (!this.props.type) {
            return (
                <ScrollView style={styles.container}>
                    <Text>Hi</Text>
                </ScrollView>
            )
        } else {
            return(<Text>This version is not released yet...</Text>)            
        }
    }
}

class TreeNode {
    constructor(question, results){
      this.yes = results;
      this.no = null;
      this.question = question;
    }
}
const root = new Node('First Anime?', [
    { comment: 'Something epic like Avatar: The Last Airbender', id: 5114 },
    { comment: 'Space western (Firefly, Guardians of the Galaxy)', id: 1 },
    { comment: 'Crime drama mindgames with the Grim Reaper', id: 1535 }
])
const q2 = new TreeNode('Need a good laugh?', [
    { comment: 'Popular action comedy (also some drama)', id: 6547 },
    { comment: 'Popular romance comedy (evolves into drama)', id: 4224 },
    { comment: 'Popular workplace comedy (no drama!)', id: 15809 }
])
const q3 = new TreeNode('Something dark and serious, then?', [
    { comment: 'Pychological police in a cyberpunk setting', id: 13601 },
    { comment: 'Superpowers, X-Men style (Chinese Electric Batman)', id: 2025 },
    { comment: 'Time travel experiment thriller', id: 9253 }
])
const q4 = new TreeNode('Want something typically japanese?', [
    { comment: 'Samurai are cool (even cooler with hip-hop music)', id: 205 },
    { comment: 'I\'VE HEARD THERE ARE SOME GIANT ROBOTS', id: 2001 },
    { comment: 'I like the Ghibli movies, especially the spirit stuff', id: 457 }
])
const q5 = new TreeNode('Fantasy action adventure?', [
    { comment: 'Something gritty, edgy and with epic music', id: 16498 },
    { comment: 'Arabian Nights road trip adventure, Avatar-style', id: 14513 },
    { comment: 'Pirates of Caribbean meets Diablo', id: 21843 }
])

root.no = q2
q2.no = q3
q3.no = q4
q4.no = q5


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingRight: 20,
      paddingLeft: 20
    }
})

export default Quiz