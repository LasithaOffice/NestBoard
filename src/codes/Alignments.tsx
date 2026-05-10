import { View } from "react-native"

export const Alignments = () => {
  return (
    <View style={
      {
        backgroundColor: 'yellow',
        flex: 0.5,
        flexDirection: 'row'
      }
    }>
      <View style={{
        width: 100, height: 100, backgroundColor: 'red',
        marginRight: 30
      }}></View>
      <View style={{
        width: 100, height: 100, backgroundColor: 'blue',
      }}></View>
      <View style={{
        width: 100, height: 100, backgroundColor: 'green',
        marginLeft: 30
      }}></View>
    </View>
  )
}