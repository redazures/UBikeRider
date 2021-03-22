import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from '../config/colors';

const HomeMap = props => {
  return (
    <View style={styles.container}>
      <Text>I am a map</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
