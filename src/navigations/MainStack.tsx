import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import ScreenC from '../screens/ScreenC'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerTintColor: 'blue',
        headerRight: () => {
          return (
            <View style={{ width: 30, height: 30, backgroundColor: 'red' }}></View>
          )
        },

        // headerLeft: () => {
        //   return (
        //     <View style={{
        //       width: 30, height: 30,
        //       backgroundColor: 'white',
        //       borderRadius: 100,
        //       elevation: 4
        //     }}></View>
        //   )
        // }
      }
    }
    >
      <Stack.Screen name='A' component={ScreenA} />
      <Stack.Screen name='B' component={ScreenB} options={{
        // headerTransparent: true,
        presentation: 'modal'
      }} />
      <Stack.Screen name='C' component={ScreenC} />
    </Stack.Navigator>
  )
}

export default MainStack