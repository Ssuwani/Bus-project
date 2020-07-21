import React, {Component} from 'react';

import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class ViewScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView source={{uri: 'https://www.naver.com/'}} />
      </View>
    );
  }
}
