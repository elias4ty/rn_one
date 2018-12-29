import React, { Component } from 'react';
import { View } from 'react-native';
import One from './src/page/One';

export default class App extends Component {

  render() {

    return (
      <View style={{flex:1}}>
        <One></One>
      </View>
    );
  }
}
