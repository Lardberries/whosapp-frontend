import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ConvoRow from './ConvoRow';

export default class ConvoView extends Component {
  render() {
    messagesTemp = ['message1', 'message2'];
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <ConvoRow emoji='emoji' messages={messagesTemp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
     color: 'red',
  },
});
