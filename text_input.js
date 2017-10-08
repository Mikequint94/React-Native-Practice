import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class DisplayName extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{backgroundColor: 'red', padding: 10, flex: 1}}>
        <TextInput
          style={{flex: 1, backgroundColor: 'green', color: 'black', height: 40}}
          placeholder="Type your name!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text + " is beautiful!"}
        </Text>
      </View>
    );
  }
}
