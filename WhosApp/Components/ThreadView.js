import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ThreadRow from './ThreadRow';

export default class ThreadView extends Component {
  // Initialize hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {emoji: '🙈', name: 'Lardberries1', preview: 'Where is everyone?', date: 'Jun 27', read: false},
        {emoji: '🐸', name: 'Lardberries2', preview: 'Ayooooo', date: 'Jun 24', read: true},
        {emoji: '🦁', name: 'Lardberries3', preview: 'Guys, I heard Jake is a Brony', date: 'Jun 24', read: true},
      ])
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ThreadRow threads={rowData} />}
        />
      </View>
    );
  }
}