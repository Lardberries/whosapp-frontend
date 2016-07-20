import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MessageGroup from './MessageGroup';

// Will take an emoji, a color, and a list of messages
export default class ConvoRow extends Component {
  render() {
    return (
      <View>
        <Text style={styles.emoji}>{this.props.emoji}</Text>
        <MessageGroup style={styles.messages} messages={this.props.messages}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emoji: {
     fontSize: 30,
  },
  messages: {
    borderLeftWidth: 2,
    borderLeftColor: '#6DABD6',
  }
});
