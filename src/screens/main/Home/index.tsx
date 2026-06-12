import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import LocationContainer from './components/LocationContainer'
import SearchContainer from './components/SearchContainer'
import PropertyTypesList from './components/PropertyTypesList'
import { PropertyType } from '../../../types/common'
import { Colors } from '../../../constant/colors'
import PropertyList from './components/PropertyList'



const Home = () => {

  const [currentPType, setCurrentPType] = useState<PropertyType>('All');

  return (
    <View style={styles.homeContainer}>
      <LocationContainer />
      <SearchContainer />
      <PropertyTypesList currentPType={currentPType} setCurrentPType={setCurrentPType} />
      <View style={
        {
          flexDirection: 'row',
          justifyContent: 'space-between'
        }
      }>
        <Text style={{
          fontSize: 24,
          fontWeight: '700'
        }}>Popular</Text>
        <Text style={{
          fontSize: 16,
          fontWeight: '500',
          color: Colors.TEXT_GRAY
        }}>See all</Text>
      </View>
      <PropertyList />
    </View>
  )
}

export default Home