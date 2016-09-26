import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Spinner from 'react-native-spinkit';

// Will take onPress, isWorking, buttonText
export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={[this.props.style, styles.container]} onPress={this.props.onPress}>
        <View style={[styles.button, this.props.isWorking && styles.working]}>
          {this.props.isWorking && <Spinner size={23} style={styles.spinner} type='Bounce' color='#ffffff'/>}
          {!this.props.isWorking && <Text style={styles.text}>{this.props.buttonText}</Text>}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 40,
  },
  button: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: '#E5A9EA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  working: {
    backgroundColor: '#B9C0C7',
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.8,
    color: 'white',
  }
});
