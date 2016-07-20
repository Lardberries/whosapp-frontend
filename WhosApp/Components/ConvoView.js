import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ConvoRow from './ConvoRow';

export default class ConvoView extends Component {
  constructor(props) {
    super(props);
  	this.state = {
  		messages: this._getMessages(),
  	};
  }

  _getMessages() {
    return [
      {
        emoji: '🐼',
        color: '#D66D6D',
        messages: [
          {content:'Do they have any food or should I go to Starbucks first', time:'5:12'}
        ],
      },
      {
        emoji: '🐥',
        color: '#99C764',
        messages: [
          {content:'Go to Starbucks', time:'5:12'},
          {content:'Actually we are probably going to get breakfast', time:'5:12'},
          {content:'Come to 1CC', time:'5:12'}
        ],
      },
      {
        emoji: '🐼',
        color: '#D66D6D',
        messages: [
          {content:'Walk to the back of the building. Elevators there', time:'5:12'}
        ],
      },
      {
        emoji: '🐙',
        color: '#6DABD6',
        messages: [
          {content:'I have never been in this buildings dfsd fsdf before...', time:'5:12'},
          {content:'Why does the elevator only go to 2', time:'5:12'}
        ],
      },
      {
        emoji: '🐼',
        color: '#D66D6D',
        messages: [
          {content:'Walk to the back of the building. Elevators there', time:'5:12'}
        ],
      },
    ];
  }

  render() {
    messagesTemp = this.state.messages;
    return (
      <View>
        {messagesTemp.map((messages, i) =>
          <ConvoRow emoji={messages.emoji} color={messages.color} messages={messages.messages} key={i}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
