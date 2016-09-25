import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import ThreadView from './ThreadView';
import SettingsView from './SettingsView';
import NewMessageView from './NewMessageView';

import { login } from '../Network/APIController';

export default class LoginView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
      authToken: '',
		};
	}

	_onLeftButtonPress() {
    this.props.navigator.push({
      component: SettingsView,
      title: 'Settings',
    });
  }

  _onRightButtonPress() {
    this.props.navigator.push({
      component: NewMessageView,
      title: 'New Message',
    });
  }

	_onLoginButtonPress() {
    let username = this.state.username;
    let password = this.state.password;
    loginPromise = login(username, password);
    loginPromise.then((loginResult) => {
      if (loginResult.success == true) {
        console.log('Login success');
        this._setAuthToken(loginResult.result);
        this._showThreads();
      } else {
        // Handle login failure...
      }
    });
	}

  _setAuthToken(authToken) {
    this.setState({
      authToken: authToken,
    });
  }

  _showThreads() {
    this.props.navigator.push({
      component: ThreadView,
      title: 'WhosApp',
      passProps: {
        authToken: this.state.authToken,
      },
      leftButtonTitle: '⚙',
      rightButtonTitle: '➕',
      onLeftButtonPress: () => this._onLeftButtonPress(),
      onRightButtonPress: () => this._onRightButtonPress(),
    });
  }

  _focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.fields}>
          <View style={styles.field}>
            <Text style={styles.fieldHeader}>USERNAME</Text>
            <TextInput
              ref='1'
              style={styles.fieldInput}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(username) => this.setState({username})}
              returnKeyType='next'
              onSubmitEditing={() => this._focusNextField('2')}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldHeader}>PASSWORD</Text>
            <TextInput
              ref='2'
              style={styles.fieldInput}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              returnKeyType='go'
              onSubmitEditing={() => this._onLoginButtonPress()}
            />
          </View>
        </View>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this._onLoginButtonPress()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </View>
        </TouchableHighlight>
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
  buttonContainer: {
    marginBottom: 20,
    width: 225,
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
  buttonText: {
    fontFamily: 'Avenir',
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.8,
    color: 'white',
  }
});
