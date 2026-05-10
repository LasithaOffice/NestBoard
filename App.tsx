/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Square } from './src/codes/Square';
import { FlexBoxExamples } from './src/codes/FlexBoxExamples';
import { Alignments } from './src/codes/Alignments';

function App() {

  const sameera = {
    stream: 'maths',
    name: "Sameera"
  };


  return (
    <SafeAreaProvider>
      {/* <FlexBoxExamples /> */}
      <Alignments />
    </SafeAreaProvider>
  );
}

export default App;
