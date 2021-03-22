/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    color: 'black',
    backgroundColor: 'white',
  },
});

export default App;
