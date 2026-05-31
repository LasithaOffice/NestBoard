import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LocationContainer from './components/LocationContainer'
import { useGetProperties } from '../../../controllers/properties'

const Home = () => {

  const { properties } = useGetProperties();

  console.log("data ", properties)

  return (
    <View style={styles.homeContainer}>
      <LocationContainer />
      <FlatList
        style={{ flex: 1, backgroundColor: 'red' }}
        data={properties}
        renderItem={(d) =>
          <View style={{ width: 200, height: 260, backgroundColor: "blue", margin: 10 }}>
            <Image
              source={{ uri: d.item.image }}
              style={{ width: 200, height: 200 }}
              resizeMode="cover"
            />

            <Text style={{ color: "white" }}>{d.item.title}</Text>
          </View>
        }
        keyExtractor={(data) => data.id}
      />
    </View>
  )
}

export default Home