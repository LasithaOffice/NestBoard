import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nest}>
        Nest
        <Text style={
          {
            color: Colors.PRIMARY_COLOR,
            fontSize: 30,
            fontWeight: '700',
          }
        }>Board</Text>
      </Text>
      <TouchableOpacity style={
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: 48,
          height: 48,
          borderRadius: 100,
          backgroundColor: 'white',
          elevation: 5,
        }
      }>
        <View style={{
          width: 8,
          height: 8,
          borderRadius: 10,
          backgroundColor: Colors.PRIMARY_COLOR,
          position: 'absolute',
          top: 8,
          right: 8
        }}></View>
        <Bell color={Colors.SECONDARY_COLOR} size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  nest: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 30,
    fontWeight: '700',
  }
})