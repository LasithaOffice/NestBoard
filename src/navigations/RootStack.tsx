import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/splash'
import AuthStack from './AuthStack'
import { checkStatus } from '../util/localStorage'
import MainStack from './MainStack'
import { useDispatch } from 'react-redux'
import { initAuth } from '../store/authSlice'

const Stack = createNativeStackNavigator()

const RootStack = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {

      checkStatus().then(refreshToken => {
        if (refreshToken) {
          dispatch(initAuth({
            refreshToken: refreshToken
          }))
        }
        setLoading(false);
      })

    }, 500)
  }, [])

  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    }
    >
      {
        loading ?
          <Stack.Screen name='splash' component={SplashScreen} />
          :
          <Stack.Screen name='MainStack' component={MainStack} />
      }

    </Stack.Navigator>
  )
}


export default RootStack