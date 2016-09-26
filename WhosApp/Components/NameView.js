import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image
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
		};
	}

	render() {
		return (
			<View style={styles.container}>
        <Image style={styles.image} source={require('../Images/Icon-163x163.png')} />
        <Text style={styles.title}>WhosApp</Text>
        <View style={styles.bottomRow}>
          <View style={styles.logIn}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
          <TouchableHighlight style={styles.logIn} onPress={() => this._onLoginButtonPress()}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableHighlight>
          <View style={styles.signUp}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </View>
        </View>
			</View>
		);
	}

  _onLoginButtonPress() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CC54D5',
  },
  image: {
    marginTop: 145,
  },
  title: {
    margin: 20,
    fontFamily: 'sandoval',
    fontSize: 36,
    color: '#EFEC72',
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    left: 0,
    right: 0,
    height: 88,
    position: 'absolute',
    bottom: 0,
  },
  logIn: {
    flex: 1,
    backgroundColor: '#E5A9EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    flex: 1,
    backgroundColor: '#8BC9F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});
