import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ConvoView from './ConvoView';
import ThreadRow from './ThreadRow';

import { getChatThreads } from '../Network/APIController';

export default class ThreadView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows( //getChatThreads(this.props.authToken)
        // Initialize hardcoded data
        [
          {chatId: 5, emoji: '🙈', name: 'Lardberries1', _id: 'Where is everyone?', date: 'Jun 27', read: false},
          {chatId: 6, emoji: '🐸', name: 'Lardberries2', _id: 'Ayooooo', date: 'Jun 24', read: true},
          {chadId: 7, emoji: '🦁', name: 'Lardberries3', _id: 'Guys, I heard Jake is a Brony', date: 'Jun 24', read: true},
        ]
      )
    };
    this._getThreads();
  }

  _getThreads() {
    chatThreadsPromise = getChatThreads(this.props.authToken);

    chatThreadsPromise.then((v) => {
      this._updateThreads(v);
    });
  }

  _updateThreads(threads) {
    console.log('asfasf');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(threads),
    });
  }

  _onSelectRow(chatId) {
    console.log(chatId);
    this.props.navigator.push({
      component: ConvoView,
      title: 'Chat Name',
      passProps: {
        authToken: this.props.authToken,
        chatId : chatId
      },
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity onPress={() => this._onSelectRow(rowData.chatId)}>
              <ThreadRow thread={rowData} />
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}
