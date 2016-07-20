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

  _getMessages() {
    return [
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
          {content:'I have never been in this building before...', time:'5:12'},
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
          {content:'Do they have any food or should I go to Starbucks first', time:'5:12'}
        ],
      },
    ];
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
