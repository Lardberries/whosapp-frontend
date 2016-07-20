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
      <View style={styles.container}>
        <Text style={styles.emoji}>{this.props.emoji}</Text>
        <MessageGroup style={[styles.messages, {borderLeftColor: this.props.color}]} messages={this.props.messages}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    marginBottom: 0,
  },
  emoji: {
     fontSize: 30,
  },
  messages: {
    borderLeftWidth: 2,
    marginLeft: 10,
    marginTop: 6,
    flex: 1,
  }
});
