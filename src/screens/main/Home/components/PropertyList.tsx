import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Star } from 'lucide-react-native';
import { Colors } from '../../../../constant/colors';
import { PropertyAPI } from '../../../../api/properties';
import { PropertyItem as PItem } from '../../../../types/properties';
import { useNavigation } from '@react-navigation/native';
import PropertyItem from './PropertyItem';
import Skeleton from '../../../../components/ui/Skeleton';
import PropertyItemSkeleton from './PropertyItemSkeleton';

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

  const [properties, setProperties] = useState<PItem[]>([])

  useEffect(() => {
    PropertyAPI.getAllProperties().then((data) => {
      setProperties(data)
      console.log(data)
    }).catch(() => { })
  }, [])

  const styles_ = useMemo(() => styles(height), [height]);

  return (
    <View style={styles_.flexContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles_.flexContainer}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        data={properties}
        keyExtractor={(data) => data.id}
        renderItem={(dt) => <PropertyItem dt={dt} />}
        ListEmptyComponent={() => {
          return (
            <>
              <PropertyItemSkeleton />
              <View style={{ height: 16 }}></View>
              <PropertyItemSkeleton />
            </>
          )
        }}
      />
    </View>
  )
}

export default PropertyList

export const styles = (height: number) => StyleSheet.create({
  propertContainer: {
    borderRadius: 16,
    width: '100%',
    height: height,
    overflow: 'hidden'
  },
  ratingContainer: {
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
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600'
  },
  gradientBackground: {
    flexDirection: 'row',
    backgroundColor: '#00000090',
    padding: 24,
    justifyContent: 'space-between'
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  flexContainer: {
    flex: 1
  }
})