import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NativeAppEventEmitter } from 'react-native';
let SpeechToText = require('react-native-speech-to-text-ios');

class RecordVoice extends Component {

  constructor() {
    super();
  }


  componentDidMount() {
    console.log("hello");
    this.subscription = NativeAppEventEmitter.addListener(
      'SpeechToText',
      (result) => {

        if (result.error) {
          alert(JSON.stringify(result.error));
        } else {
          console.log(result.bestTranscription.formattedString);
        }

      }
    );
    // SpeechToText.startRecognition("en-US");
  }

  componentWillUnmount() {
    if (this.subscription !== null) {
      this.subscription.remove();
      this.subscription = null;
    }
}

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text onPress={() => SpeechToText.finishRecognition()}>
          Press to stop recording
        </Text>
      </View>
    );
  }
}


export default RecordVoice;
