import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/main/Home'
import PropertyDetails from '../screens/main/PropertyDetails'
import Header from '../screens/main/Home/components/Header'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={
      { headerShown: false }
    } >
      <Stack.Screen name='Home' options={
        {
          header: Header,
          headerShown: true
        }
      } component={Home} />
      <Stack.Screen name='PropertyDetails' component={PropertyDetails} options={{
        headerShown: false,
        headerTransparent: true
      }} />
    </Stack.Navigator>
  )
}

export default AppStack