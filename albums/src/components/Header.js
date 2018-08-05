import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        Social Media
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#afc74b',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#800000',
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 1,
    position: 'relative',
    elevation: 2,
    marginBottom: 150
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

export default Header;
