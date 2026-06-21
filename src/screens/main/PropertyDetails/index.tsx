import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from './components/ScreenWrapper'
import PropertyDetailsScreen from './components/PropertyDetailsScreen'
import { PropertyAPI } from '../../../api/properties'
import { useNavigation, useRoute } from '@react-navigation/native'

const PropertyDetails = () => {

  const route: any = useRoute();
  const nav: any = useNavigation()

  useEffect(() => {
    PropertyAPI.getSingleProperty(route.params.pid).then(d => {
      console.log("data", d)
    })
  }, [])

  return (
    <ScreenWrapper>
      <PropertyDetailsScreen
        title="The Galle Lodge"
        address="123 Galle Road, Colombo 03"
        badges={['Apartment', 'AC', 'Premium']}
        amenities={['WiFi']}
        stats={{ seatsAvailable: 12, minStayMonths: 1, priceFrom: 'LKR 15K' }}
        rooms={[
          { id: '1', name: '5-Seat AC Room', tag: 'AC', pricePerSeat: 18000, seatsFree: 12, fillPercentage: 60 },
          { id: '2', name: '4-Seat Non-AC Room', tag: 'Non-AC', pricePerSeat: 12000, seatsFree: 8, fillPercentage: 50 },
          { id: '3', name: '4-Seat Non-AC Room', tag: 'Non-AC', pricePerSeat: 12000, seatsFree: 8, fillPercentage: 50 },
        ]}
        onViewRooms={(id) => {
          nav.navigate('RoomListing')
        }}
      />
    </ScreenWrapper>
  )
}

export default PropertyDetails