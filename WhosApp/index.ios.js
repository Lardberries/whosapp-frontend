/**
 *  MSFT Hackathon Project: WhosApp
 *  Application launch and navigation
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FirstView from './Components/FirstView';

export default class WhosApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: FirstView,
          title: '',
          navigationBarHidden: true
        }}

        style={{ flex: 1 }}
        barTintColor='white'
        shadowHidden={true}
        tintColor='#CC54D5'
      />
    );
  }
}

AppRegistry.registerComponent('WhosApp', () => WhosApp);
