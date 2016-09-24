import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import ThreadView from './ThreadView';
import SettingsView from './SettingsView';
import NewMessageView from './NewMessageView';

import KeyboardSpacer from 'react-native-keyboard-spacer';

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
      authToken: loginResult.result,
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

	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.title}>WhosApp</Text>
				<TextInput
          autoCapitalize='none'
          autoCorrect={false}
					style={styles.inputTextBox}
          placeholder='Username'
          onChangeText={(username) => this.setState({username})}
				/>
				<TextInput
					style={styles.inputTextBox}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
				/>
        <KeyboardSpacer/>
        <View>
          <TouchableHighlight style={styles.button} onPress={() => this._onLoginButtonPress()}>
            <Text style={{ color: 'black' }}>Login</Text>
          </TouchableHighlight>
        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 200,
  },
  title: {
    margin: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  inputTextBox: {
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'black',
  }
});
