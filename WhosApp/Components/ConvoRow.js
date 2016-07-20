import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Will take an emoji, a color, and a list of messages
export default class ConvoRow extends Component {
  render() {
    return (
      <View>
        <Text style={styles.emoji}>{this.props.emoji}</Text>
        { this.props.messages.map((message, i) =>
          <Text key={i}>{message.content}</Text>
        ) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
     color: 'red',
  },
});
