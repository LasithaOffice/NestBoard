import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'
import RoundButton from '../../../../components/ui/RoundButton'

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
      <RoundButton
        Icon={<Bell color={Colors.SECONDARY_COLOR} size={20} />}
        orangeIndicator
      />
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