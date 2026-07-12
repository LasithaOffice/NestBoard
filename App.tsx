/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootStack from './src/navigations/RootStack';
import { store } from './src/store/store';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
dayjs.extend(customParseFormat);
function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <View style={{ flex: 1 }}>
              <NavigationContainer>
                {/* <MainStack />   */}
                {/* <-- Navigation system */}
                <RootStack />
              </NavigationContainer>
            </View>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});