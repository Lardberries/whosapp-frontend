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

import LoginView from './Components/LoginView';

export default class WhosApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: LoginView,
          title: 'Login',
          navigationBarHidden: true
        }}

        style={{ flex: 1 }}
        barTintColor='#551A8B'
        tintColor='white'
      />
    );
  }
}

AppRegistry.registerComponent('WhosApp', () => WhosApp);

