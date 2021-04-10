import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import colors from '../config/colors';

export default HomeSearch = props => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={colors.dark}/>
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size ={16} color={colors.dark}/>
        </View>
      </View>
      <Text>This is my search</Text>
      <Text>This is my search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor:'grey',
    margin:10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText:{

  },
  timeContainer:{

  },
});
// this is a new comment 