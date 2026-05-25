import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import ScreenC from '../screens/ScreenC'
import Home from '../screens/main/Home'
import Header from '../screens/main/Home/components/Header'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        header: Header
      }
    }
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigation