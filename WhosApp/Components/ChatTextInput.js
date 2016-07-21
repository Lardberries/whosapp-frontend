import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class ConvoView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'rgba(169,169,169,0.5)',
    borderTopWidth: 1,
  },
  textInput: {
    height: 52,
    padding: 14,
    fontSize: 15,
    fontWeight: '300',
  },
});
