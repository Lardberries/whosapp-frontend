import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ConvoView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
     color: 'red',
  },
});
