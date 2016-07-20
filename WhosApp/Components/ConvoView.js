import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

import ConvoRow from './ConvoRow';

export default class ConvoView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
  		dataSource: ds.cloneWithRows(this._getMessages()),
  	};

    setTimeout(() => {
      moreMessages = this._getMessages()
      moreMessages.unshift({
        emoji: '🐢',
        color: 'purple',
        messages: [
          {content:'Wait who said that?', time:'5:12'}
        ],
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(moreMessages) ,
      });
    }, 1000);
  }

  _getMessageDetails(object) {
    return {
      content: object.content,
      time: object.time,
      _id: object._id,
      seq: object.seq,
    };
  }

  _getMessages() {
    // chatMessages = getChatMessages(this.props.chatId);
    chatMessages = [
       {
          emoji:"🎓",
          color:"#9DC3D4",
          _id:"578fd2de82432561078f3b1a",
          seq:2,
          time:"2016-07-20T19:37:02.561Z",
          content:"gimme a color"
       },
       {
          emoji:"😎",
          color:"#ECEF89",
          _id:"578fc7aa82432561078f3b19",
          seq:1,
          time:"2016-07-20T18:49:14.087Z",
          content:"i don't like that color"
       },
       {
          emoji:"😎",
          color:"#ECEF89",
          _id:"578fc6fd8ac52e5907272469",
          seq:0,
          time:"2016-07-20T18:46:21.963Z",
          content:"gimme a color"
       },
       {
          emoji:"🎓",
          color:"#9DC3D4",
          _id:"578fd2de82432561078fpb1a",
          seq:2,
          time:"2016-07-20T18:37:02.561Z",
          content:"wuddup"
       },
    ];

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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ConvoRow messages={rowData} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
