import React, { Component } from 'react';
import { Text, View, Image, Linking, ScrollView } from 'react-native';
import Button from '../components/Button';
import CardSection from '../components/CardSection';
import Card from '../components/Card';

const logo = require('./socialMedia.jpg');

class ImageHeader extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          Social Media
        </Text>
      </View>
        <View style={styles.viewStyle}>
          <Image
          source={logo} style={styles.imageStyle}
          />
        </View>
        <Card>
          <CardSection>
            <Button onPress={() => Linking.openURL('https://www.facebook.com/')}>Facebook</Button>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button onPress={() => Linking.openURL('https://twitter.com/')}>Twitter</Button>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button onPress={() => Linking.openURL('https://www.instagram.com/')}>Instagram</Button>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Button onPress={() => Linking.openURL('https://www.tumblr.com/login')}>Tumblr</Button>
          </CardSection>
        </Card>
      </ScrollView>


    );
  }

}

const styles = {
  viewStyle: {
    flex: 1
  },
  imageStyle: {
    paddingTop: 280,
    width: '100%',
    height: '100%',
    marginBottom: 30
  },
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
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

export default ImageHeader;
