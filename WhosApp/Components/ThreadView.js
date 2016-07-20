import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ThreadView extends Component {
  render() {
    return (
      <View style={styles.fillerText}>
        <Text>Chat Threads!</Text>
      </View>
    );
  }
}

// Styles for testing
const styles = StyleSheet.create({
  fillerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});