import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class ConvoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  sendMessage() {
    console.log(this.state.text);
  }

  render() {
    var _textInput: TextInput;
    return (
      <View style={styles.container}>
        <TextInput
            ref={(textInput) => { _textInput = textInput; }}
            style={styles.textInput}
            placeholder={this.props.placeholder}
            returnKeyType='send'
            onChangeText={(text) => this.setState({text})}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.sendMessage();
              _textInput.clear();
            }}
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
