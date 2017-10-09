import Bananas from './bananas';
import Blink from './blink';
import DisplayName from './text_input';
import SectionListBasics from './section_list';
import Movies from './fetch_practice';
import App from './App';
import VoiceTest from './record_voice';

import {Router, Scene} from 'react-native-router-flux';
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

const Navigation = () => {
  return (
      <Router>
        <Scene key = "root">
          <Scene key="bananas"
            component={Bananas}
            title="Bananas"
            >
          </Scene>
          <Scene key="movies"
            component={Movies}
            title="Movies">
        </Scene>
          <Scene key="app"
            component={App}
            title="App"
            initial>
        </Scene>
          <Scene key="record"
            component={VoiceTest}
            title="Record Voice"
            >
        </Scene>
          <Scene key="sectionlist"
            component={SectionListBasics}
            title="SectionList"
            >
        </Scene>
        </Scene>
      </Router>
  );
};

export default Navigation;
