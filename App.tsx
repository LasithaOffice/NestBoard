/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Square } from './src/codes/Square';
import { FlexBoxExamples } from './src/codes/FlexBoxExamples';
import { Alignments } from './src/codes/Alignments';
import ColorsAndDimentions from './src/codes/ColorsAndDimentions';
import TextViewAndButtons from './src/codes/uicomponents/TextViewAndButtons';
import TextInputExample from './src/codes/uicomponents/TextInputExample';
import ImageExample from './src/codes/uicomponents/ImageExample';
import Hooks from './src/codes/uicomponents/Hooks';
import Componentdestroying from './src/codes/uicomponents/Componentdestroying';
import FlatListExample from './src/codes/uicomponents/FlatListExample';
import ShoppingCart from './src/codes/uicomponents/ShoppingCart';
import HorizontalList from './src/codes/uicomponents/HorizontalExample';
import ListPerformance from './src/codes/uicomponents/ListPerformance';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import MainNavigation from './src/navigations/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/types/store';
import RootNav from './src/navigations/RootNav';

function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        {/* <FlexBoxExamples /> */}
        {/* <Alignments /> */}
        {/* <ColorsAndDimentions /> */}
        {/* <TextViewAndButtons /> */}
        {/* <TextInputExample /> */}
        {/* <ImageExample /> */}
        {/* <Componentdestroying /> */}
        <View style={{ flex: 1 }}>
          {/* <ShoppingCart /> */}
          {/* <FlatListExample /> */}
          {/* <ListPerformance /> */}
          {/* <HorizontalList /> */}

          {/* Mounting Navigation system */}
          <NavigationContainer>
            {/* <MainStack />   */}
            {/* <-- Navigation system */}
            <RootNav />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
