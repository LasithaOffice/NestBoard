import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from './components/ScreenWrapper'
import PropertyDetailsScreen from './components/PropertyDetailsScreen'
import { PropertyAPI } from '../../../api/properties'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Skeleton from '../../../components/ui/Skeleton'
import { SCREEN_HEIGHT } from '../../../constant/dimentions'
import { saveProperty } from '../../../store/propertySlice'

const PropertyDetails = () => {

  const route: any = useRoute();
  const nav: any = useNavigation()
  const dispatch = useDispatch();

  const currentProperty = useSelector((state: RootState) => state.property.currentProperty)

  useEffect(() => {
    PropertyAPI.getSingleProperty(route.params.pid).then(d => {
      dispatch(saveProperty(d))
    })
  }, [])

  console.log("currentProperty", currentProperty)

  return (
    <ScreenWrapper>
      {
        currentProperty ?
          <PropertyDetailsScreen
            title={currentProperty.title}
            address={currentProperty.address}
            badges={[...currentProperty.amenities]}
            stats={{ seatsAvailable: currentProperty.rooms.length, minStayMonths: currentProperty.minStay, priceFrom: 'LKR 15K' }}
            rooms={currentProperty.rooms}
            onViewRooms={(id) => {
              nav.navigate('RoomListing')
            }}
          />
          :
          <Skeleton height={SCREEN_HEIGHT * 0.55} style={{ marginTop: '90%' }} width={'100%'} />
      }
    </ScreenWrapper>
  )
}

export default PropertyDetails