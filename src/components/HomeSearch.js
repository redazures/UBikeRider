import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default HomeSearch = props => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to</Text>
      </View>
      <Text>This is my search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
// this is a new comment 