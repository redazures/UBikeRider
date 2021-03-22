import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from '../config/colors';
const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if needed</Text>
      <Text style={styles.text}>Please be nice</Text>
      <Text style={styles.quote}>Stop Asian Hate</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  quote: {
    color: colors.dark,
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: colors.white,
    marginBottom: 10,
  },
});
