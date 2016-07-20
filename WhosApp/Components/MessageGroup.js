import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Will take an emoji, a color, and a list of messages
export default class MessageGroup extends Component {
  // Specifies the type prop must be
  propTypes: {
    style: View.propTypes.style,
  }

  render() {
    return (
      <View style={this.props.style}>
        { this.props.messages.map((message, i) =>
          <Text style={styles.message} key={i}>{message.content}</Text>
        ) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    fontSize: 15,
    lineHeight: 19,
    color: '#3B3B3B',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 5,
  }
});
