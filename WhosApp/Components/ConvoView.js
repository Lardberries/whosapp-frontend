import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ConvoRow from './ConvoRow';

export default class ConvoView extends Component {
  render() {
    messagesTemp = [{content:'message1', time:'5:12'}, {content:'message2', time:'5:12'}];
    return (
      <View>
        <ConvoRow emoji='🙈' messages={messagesTemp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
