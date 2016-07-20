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
        <Text style={styles.emoji}>🙈</Text>
        <View style={styles.multiLineText}>
          <Text>{this.props.thread.name}</Text>
          <Text>{this.props.thread._id}</Text>
        </View>
        <Text>Jun 27</Text>
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
