import React, { Component } from 'react';
import { View } from 'react-native';
import One from './src/page/One';
import Me from './src/page/Me';
import FooterView from './src/components/footerView';

export default class App extends Component {

  render() {

    return (
      <View style={{flex:1,backgroundColor:'rgba(239,236,237,1.0)'}}>
        {/* <One></One> */}
        <Me></Me>
        <FooterView></FooterView>
      </View>
    );
  }
}
