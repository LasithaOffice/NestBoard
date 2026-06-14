import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import ScreenC from '../screens/ScreenC'
import Home from '../screens/main/Home'
import Header from '../screens/main/Home/components/Header'
import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/Signup'
import { useAppSelector } from '../types/hooks'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { restoreAuth } from '../types/authStorage'
import MainNavigation from './MainNavigation'

const Stack = createNativeStackNavigator()

const RootNav = () => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    restoreAuth().finally(() => setIsReady(true));
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {!isReady ? (
        <Stack.Screen name="Splash" component={ScreenA} />
      ) :
        <Stack.Screen name="AppStack" component={MainNavigation} />
      }
    </Stack.Navigator>
  )
}

export default RootNav