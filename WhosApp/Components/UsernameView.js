import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dismissKeyboard from 'dismissKeyboard';

import InputField from './InputField';
import Button from './Button';

//TODO: combine similarities from this and NameView

export default class UsernameView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		};
	}

  _nextScreen() {
    // push the next step in the process
    this.props.navigator.push({
      component: PasswordView,
      passProps: {
        fullName: this.props.fullName,
        userName: this.state.userName,
      },
    });
  }

	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.title}>Pick a username</Text>
        <View style={styles.fields}>
          <InputField
            ref='username'
            autoFocus={true}
            onChangeText={(userName) => this.setState({userName})}
            onSubmitEditing={() => this._nextScreen()}
            header='USERNAME'
          />
        </View>
        <Button
          style={styles.buttonContainer}
          buttonText='Continue'
          onPress={() => this._nextScreen()}
        />
        <KeyboardSpacer/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 60,
  },
  title: {
    margin: 15,
    fontFamily: 'Avenir',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.5,
    color: 'black',
  },
  fields: {
    flex: 1,
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 20,
    width: 225,
  },
});
