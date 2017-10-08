/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import bananas from './bananas';
import Blink from './blink';
import DisplayName from './text_input';
import SectionListBasics from './section_list';
import Movies from './fetch_practice';

import {Actions, Router, Scene} from 'react-native-router-flux';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  View,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component <{}> {
  render() {
    let pic = {
      uri: 'https://ih0.redbubble.net/image.241326866.8236/flat,800x800,075,f.u2.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dream Capture
        </Text>
        <Image source={pic} style={{width: 200, height: 200}}/>
        <Text style={styles.instructions}>
          I am building my first iphone app.  How cool!
        </Text>
          <Button style={{padding:20, flex: 1, flexDirection: 'column', justifyContent: 'space-between', width:200}}
            onPress={() => { Actions.bananas()}}
            title="Press Me"
          />
        <ScrollView>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 50, height: 220, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 220, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 220, backgroundColor: 'steelblue'}} />
        </View>
        <DisplayName/>
        <Text style={{width: 100, height: 50,  color: 'white'}}>
          <Blink text='I love to blink'/>
        </Text>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    color: 'lime',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    height: 50,
    minWidth: 100,
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
    backgroundColor: 'lime'
  },
});
