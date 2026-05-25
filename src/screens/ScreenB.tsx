import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ScreenB = () => {

  const nav: any = useNavigation();


  const route: any = useRoute();

  const valueFromPrevScreen = route.params.txt;
  const myName = route.params.name;

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Screen B</Text>
      <Button title='Go back' onPress={() => {
        nav.push('C')
      }} />
      <Text style={
        {
          fontSize: 25,
          color: 'red'
        }
      }>{valueFromPrevScreen}</Text>
      <Text style={
        {
          fontSize: 25,
          color: 'blue'
        }
      }>{myName}</Text>
    </View>
  )
}

export default ScreenB