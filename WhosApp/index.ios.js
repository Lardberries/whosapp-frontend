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

import ThreadView from './Components/ThreadView';
import SettingsView from './Components/SettingsView';
import NewMessageView from './Components/NewMessageView';

export default class WhosApp extends Component {
  _onLeftButtonPress() {
    this.refs.nav.push({
      component: SettingsView,
      title: 'Settings',
    });
  }

  _onRightButtonPress() {
    this.refs.nav.push({
      component: NewMessageView,
      title: 'New Message',
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: ThreadView,
          title: 'WhosApp',
          leftButtonTitle: 'Settings',
          rightButtonTitle: 'New',
          onLeftButtonPress: () => this._onLeftButtonPress(),
          onRightButtonPress: () => this._onRightButtonPress(),
        }}

        style={{ flex: 1 }}
        barTintColor='#551A8B'
        tintColor='white'
      />
    );
  }
}

AppRegistry.registerComponent('WhosApp', () => WhosApp);

