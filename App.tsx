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
import TextViewAndButtons from './src/uicomponents/TextViewAndButtons';
import TextInputExample from './src/uicomponents/TextInputExample';
import ImageExample from './src/uicomponents/ImageExample';
import Hooks from './src/uicomponents/Hooks';
import Componentdestroying from './src/uicomponents/Componentdestroying';
import FlatListExample from './src/uicomponents/FlatListExample';
import ShoppingCart from './src/uicomponents/ShoppingCart';
import HorizontalList from './src/uicomponents/HorizontalExample';
import ListPerformance from './src/uicomponents/ListPerformance';

function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <SafeAreaProvider>
      {/* <FlexBoxExamples /> */}
      {/* <Alignments /> */}
      {/* <ColorsAndDimentions /> */}
      {/* <TextViewAndButtons /> */}
      {/* <TextInputExample /> */}
      {/* <ImageExample /> */}
      {/* <Componentdestroying /> */}
      <SafeAreaView>
        {/* <ShoppingCart /> */}
        <FlatListExample />
        {/* <ListPerformance /> */}
        {/* <HorizontalList /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
