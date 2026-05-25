import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScreenC = () => {

  const nav: any = useNavigation();

  return (
    <View style={{ backgroundColor: 'yellow', flex: 1 }}>
      <Text>ScreenC</Text>
      <Button title='Goto A' onPress={() => {
        nav.popToTop();
      }} />
    </View>
  )
}

export default ScreenC