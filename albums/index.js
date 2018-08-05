import { AppRegistry, View } from 'react-native';
import React from 'react';
//import Header from './src/components/Header';
import ImageHeader from './src/image/ImageHeader';
//import SocialMedia from './src/socialMedia/index';

const App = () => {
  return (
    <View style={{ flex: 1 }}>

      <ImageHeader />

    </View>

  );
};

AppRegistry.registerComponent('albums', () => App);
