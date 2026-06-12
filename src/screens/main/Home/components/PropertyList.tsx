import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Star } from 'lucide-react-native';
import { Colors } from '../../../../constant/colors';
import { PropertyAPI } from '../../../../api/properties';
import { PropertyItem } from '../../../../types/properties';

// const Properties = [
//   {
//     id: "1",
//     title: "Ocean View Villa",
//     location: "Mirissa, Sri Lanka",
//     type: "Villa",
//     price: "$350",
//     rating: 4.9,
//     image: "https://images.pexels.com/photos/28463539/pexels-photo-28463539.jpeg",
//     lat: 5.9485,
//     lng: 80.4716,
//   },
//   {
//     id: "2",
//     title: "Luxury City Apartment",
//     location: "Colombo, Sri Lanka",
//     type: "Apartment",
//     price: "$120",
//     rating: 4.7,
//     image: "https://images.pexels.com/photos/28463543/pexels-photo-28463543.jpeg",
//     lat: 6.9271,
//     lng: 79.8612,
//   },
// ]


const PropertyList = () => {

  const height = 320;

  const [properties, setProperties] = useState<PropertyItem[]>([])

  useEffect(() => {
    PropertyAPI.getAllProperties().then((data) => {
      setProperties(data)
      console.log(data)
    }).catch(() => { })
  }, [])

  const styles_ = useMemo(() => styles(height), [height]);

  return (
    <View style={
      {
        flex: 1,
        paddingBottom: 40
      }
    }>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={
          {
            flex: 1
          }
        }
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        data={properties}
        keyExtractor={(data) => data.id}
        renderItem={(dt) =>
          <View style={styles_.propertContainer}>
            <ImageBackground style={{
              height: '100%',
              width: '100%',
              justifyContent: 'flex-end'
            }} source={
              {
                uri: dt.item.image
              }
            }>
              <LinearGradient style={
                {
                  flexDirection: 'row',
                  backgroundColor: '#00000090',
                  padding: 24,
                  justifyContent: 'space-between'
                }
              }
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0,255)']}>
                <View>
                  <Text style={{ color: 'white', fontSize: 12, letterSpacing: 0.6 }}>{dt.item.type}</Text>
                  <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>{dt.item.title}</Text>
                  <Text style={{ color: 'white' }}>{dt.item.location}</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>{dt.item.price}</Text>
                  <Text style={{ color: 'white' }}>{"Month"}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
            <View style={{
              backgroundColor: 'white',
              height: 36,
              position: 'absolute',
              flexDirection: 'row',
              paddingHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              right: 16,
              top: 16,
              gap: 6
            }}>
              <Star color={Colors.PRIMARY_COLOR} />
              <Text style={
                {
                  fontSize: 16,
                  fontWeight: '600'
                }
              }>{dt.item.rating}</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default PropertyList

const styles = (height: number) => StyleSheet.create({
  propertContainer: {
    borderRadius: 16,
    width: '100%',
    height: height,
    overflow: 'hidden'
  }
})