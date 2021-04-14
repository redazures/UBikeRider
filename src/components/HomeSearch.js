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
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor:colors.medium,
    margin:10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inputText:{
    fontSize:20,
    fontWeight:'500',
    color:colors.white,
  },
  timeContainer:{
    flexDirection:'row',
    width:100,
    padding:10,
    justifyContent: 'space-between',
    backgroundColor:colors.white,
    borderRadius:10,
    },
});
// this is a new comment 