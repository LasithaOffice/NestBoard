import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LocationContainer from './components/LocationContainer'

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <LocationContainer />
    </View>
  )
}

export default Home