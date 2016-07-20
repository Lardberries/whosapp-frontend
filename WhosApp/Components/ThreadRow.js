import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Props: thread
export default class ThreadRow extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.emoji}>{this.props.threads.emoji}</Text>
        <View style={styles.multiLineText}>
          <Text>{this.props.threads.name}</Text>
          <Text>{this.props.threads.preview}</Text>
        </View>
        <Text>{this.props.threads.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  emoji: {
    fontSize: 50,
    justifyContent: 'center',
  },
  multiLineText: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 15,
  }
});
