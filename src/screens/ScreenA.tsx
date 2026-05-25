import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Search } from 'lucide-react-native';

const ScreenA = () => {

  const nav: any = useNavigation();

  const [text, setText] = useState("")

  return (
    <View>
      <Text style={{ fontSize: 25 }}>Screen A</Text>
      <TextInput onChangeText={setText} value={text} style={
        {
          borderWidth: 1,
          width: '100%',
          fontSize: 20
        }
      } />
      <Button title='Pass value' onPress={() => {
        nav.push('B', {
          txt: text,
          name: 'Lasitha'
        })
      }} />
      <Search color={'gray'} size={100} />
    </View>
  )
}

export default ScreenA