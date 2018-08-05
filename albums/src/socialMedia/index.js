import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';

class SocialMedia extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Button>
            <Text>Facebook</Text>
        </Button>
      </View>

    );
  }
}

const styles = {
  viewStyle: {
  //  justifyDirection: 'row',
    justifyContent: 'center',

  }
};

export default SocialMedia;
