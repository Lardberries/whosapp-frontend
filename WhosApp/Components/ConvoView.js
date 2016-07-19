import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ConvoView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
     color: 'red',
  },
});
