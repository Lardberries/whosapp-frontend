import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// Will take a header, onChangeText, onSubmitEditing, autoFocus, secureTextEntry (default false)
export default class InputField extends Component {
  focus = () => {
    this.refs['textInput'].focus();
  };

  render() {
    return (
      <View style={styles.field}>
        <Text style={styles.fieldHeader}>{this.props.header}</Text>
        <TextInput
          ref='textInput'
          style={styles.fieldInput}
          autoFocus={this.props.autoFocus}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.props.onChangeText}
          blurOnSubmit={false}
          returnKeyType='next'
          onSubmitEditing={this.props.onSubmitEditing}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingLeft: 2,
    paddingRight: 2
  },
  fieldHeader: {
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 11,
    letterSpacing: 0.9,
    color: '#9A9FA7',
    marginTop: 10,
    marginBottom: 5,
  },
  fieldInput: {
    height: 30,
    width: 270,
    flex: 1,
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 17,
  },
});
