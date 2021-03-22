import React from 'react';
import {Text, View} from 'react-native';

import HomeMap from '../components/HomeMap'
import HomeSearch from '../components/HomeSearch'
import CovidMessage from '../components/CovidMessage'

const HomeScreen = props => {
  return (
    <View>
      <HomeMap/>
      <CovidMessage/>
      <HomeSearch/>
      <Text>not just another component</Text>
    </View>
  );
};

export default HomeScreen;
