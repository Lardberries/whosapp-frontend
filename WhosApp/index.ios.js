/**
 *  MSFT Hackathon Project: WhosApp
 *  Application launch screen
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

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

class ThreadView extends Component {
  render() {
    return (
      <View style={styles.fillerText}>
        <Text>Chat Threads!</Text>
      </View>
    );
  }
}

class NewMessageView extends Component {
  render() {
    return (
      <View style={styles.fillerText}>
        <Text>New Message!</Text>
      </View>
    );
  }
}

class SettingsView extends Component {
  render() {
    return (
      <View style={styles.fillerText}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fillerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

AppRegistry.registerComponent('WhosApp', () => WhosApp);

