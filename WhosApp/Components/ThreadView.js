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
      dataSource: ds.cloneWithRows([])
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
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(threads),
    });
  }

  _onSelectRow(chatId) {
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
          enableEmptySections={true}
          renderRow={(rowData) =>
            <TouchableOpacity onPress={() => this._onSelectRow(rowData._id)}>
              <ThreadRow thread={rowData} authToken={this.props.authToken} chatId={rowData._id}/>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}
