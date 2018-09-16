import React, {Component} from 'react';
import {Button, Text, View} from "react-native";


export class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'DetailsScreen',
  };

  render() {
    const {navigation} = this.props;
    console.log(this.props);
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    console.log('itemId:: ', itemId);
    console.log('otherParam: ', otherParam);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    );
  }
}

export default DetailsScreen;