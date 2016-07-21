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
        <Text style={styles.emoji}>{this.props.thread.emoji}</Text>
        <View style={styles.multiLineText}>
          <Text style={styles.title}>{this.props.thread.name}</Text>
          <Text style={[styles.subTitle, styles.names]}>{this.props.thread.userNames.join(", ")}</Text>
        </View>
        <Text style={[styles.subTitle, styles.date]}>July 21</Text>
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
    fontSize: 48,
    justifyContent: 'center',
  },
  multiLineText: {
    flexDirection: 'column',
    flex: 2,
    paddingLeft: 15,
  },
  title: {
    fontSize: 17,
    color: "#030303",
  },
  subTitle: {
    fontSize: 14,
    color: "#929292",
  },
  date: {
    fontSize: 15,
    marginTop: -13
  },
  names: {
    paddingTop: 3,
  }
});
