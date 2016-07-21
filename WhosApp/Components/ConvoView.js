import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import ConvoRow from './ConvoRow';
import ChatTextInput from './ChatTextInput';

import { getChatMessages } from '../Network/APIController'

export default class ConvoView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
  		dataSource: ds.cloneWithRows([]),
      messages: [],
  	};

    this._getMessages();
  }

  _getMessageDetails(object) {
    return {
      content: object.content,
      time: object.time,
      _id: object._id,
      seq: object.seq,
    };
  }

  // merges together messages if they are from the same sender
  _groupNeighbors(chatMessages) {
    cleanMessages = [];
    for (i = 0; i < chatMessages.length; i++) {
      object1 = chatMessages[i];
      var messages = [this._getMessageDetails(object1)];

      for (j = i + 1; j < chatMessages.length; j++) {
        object2 = chatMessages[j];
        if (object1.emoji === object2.emoji) {
          messages.push(this._getMessageDetails(object2));
          chatMessages.splice(j, 1);
        } else {
          break;
        }
      }
      cleanMessages.push({
        emoji: object1.emoji,
        color: object1.color,
        messages: messages
      })
    }
    return cleanMessages;
  }

  // given an array of messags updates the state to include these messages
  _updateMessages(messages) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(messages),
      messages: messages,
    });
  }

  _getMessages() {
    chatMessagesPromise = getChatMessages(this.props.authToken, this.props.chatId);
    console.log('getting messages');

    chatMessagesPromise.then((v) => {
      console.log(v);
      cleanMessages = this._groupNeighbors(v);
      this._updateMessages(cleanMessages);
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          style={styles.convoArea}
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => <ConvoRow messages={rowData} />}
        />
      <ChatTextInput placeholder="Type a message..." {...this.props} _getMessages={this._getMessages}/>
        <KeyboardSpacer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  convoArea: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
});
