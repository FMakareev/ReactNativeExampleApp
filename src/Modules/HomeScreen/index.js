import React, {Component} from 'react';
import {Button, Text, View} from "react-native";


export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to DetailsScreen"
          onPress={() => navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
      </View>
    );
  }
}

export default HomeScreen;