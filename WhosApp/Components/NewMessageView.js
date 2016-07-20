import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewMessageView extends Component {
  render() {
    return (
      <View style={styles.fillerText}>
        <Text>New Message!</Text>
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