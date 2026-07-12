/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootStack from './src/navigations/RootStack';
import { store } from './src/store/store';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            {/* <MainStack />   */}
            {/* <-- Navigation system */}
            <RootStack />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
