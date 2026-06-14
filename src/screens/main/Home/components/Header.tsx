import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { Colors } from '../../../../constant/colors'
import RoundButton from '../../../../components/ui/RoundButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../store/authSlice'
import { removeRefreshToken } from '../../../../util/localStorage'

const Header = () => {

  const nav: any = useNavigation();
  const dispatch = useDispatch();

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
        onPress={() => {
          dispatch(logout())
          removeRefreshToken();
        }}
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