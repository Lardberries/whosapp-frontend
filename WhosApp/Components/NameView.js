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

import UsernameView from './UsernameView';
import InputField from './InputField';
import Button from './Button';

export default class NameView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
		};
	}

  _focusField = (nextField) => {
    this.refs[nextField].focus();
  };

  _nextScreen() {
    var names = [this.props.firstName, this.props.lastName];
    // combine them including a space only if necessary
    var fullName = names.filter((name) => {return name}).join(' ');

    // push the next step in the process
    this.props.navigator.push({
      component: UsernameView,
      passProps: {
        fullName: fullName,
      },
    });
  }

	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.title}>What's your name?</Text>
        <View style={styles.fields}>
          <InputField
            ref='firstname'
            onChangeText={(firstName) => this.setState({firstName})}
            onSubmitEditing={() => this._focusField('lastname')}
            header='FIRST NAME'
            autoFocus={true}
          />
          <InputField
            ref='lastname'
            onChangeText={(lastName) => this.setState({lastName})}
            onSubmitEditing={() => this._nextScreen()}
            header='LAST NAME'
          />
        </View>
        <Button
          style={styles.buttonContainer}
          buttonText='Sign Up'
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
