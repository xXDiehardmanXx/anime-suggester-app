import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './screens/Home'
import Search from './screens/Search'
import Suggest from './screens/Suggest'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack'

// function App() {
//   return (
//     <View style={styles.container}>
//       <Home />
//     </View>
//   );
// }

const SearchNav = createStackNavigator({
  Search: {
    screen: Search
  }
}, {
  initialRouteName: 'Search'
})

const HomeNav = createStackNavigator({
  "My Anime World": {
    screen: Home
  }
})

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' color={tintColor} size={25} />
      ),
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' }
    }
  },
  Search: {
    screen: SearchNav,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
          <Icon name='search' type='font-awesome' color={tintColor} size={22} />
      ),
      activeColor: '#ffffff',
      inactiveColor: '#ebaabd',
      barStyle: { backgroundColor: '#d13568' }
    }
  },
  Suggest: {
    screen: Suggest,
    navigationOptions: {
      tabBarLabel: 'Suggest',
      tabBarIcon: ({ tintColor }) => (
          <Icon name='film' type='font-awesome' color={tintColor} size={22} />
      ),
      activeColor: '#ffffff',
      inactiveColor: '#ebaabd',
      barStyle: { backgroundColor: '#d13568' }
    }
  }
}, {
  initialRouteName: 'Home',
  activeColor: '#ffffff',
  inactiveColor: '#bda1f7',
  barStyle: { backgroundColor: '#6948f4' }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default createAppContainer(TabNavigator)