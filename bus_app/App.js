import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {WebView} from 'react-native-webview';

const Stack = createStackNavigator();

export default class App extends Component {
  ViewScreen() {
    return (
      <View style={{flex: 1}}>
        <WebView
          style={{flex: 1}}
          source={{uri: 'http://192.168.0.28:3000/video_feed'}}
        />
      </View>
    );
  }
  //suwani
  HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bus for Children</Text>
        <Image
          style={styles.childrenImage}
          source={require('./src/image/children.png')}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Video')}>
          <Image source={require('./src/image/button.png')} />
          <Text style={styles.buttonText}>동영상 보기</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={this.HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Video"
            component={this.ViewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9B9A9A',
  },
  welcome: {
    fontSize: 40,
    marginBottom: 60,
    color: '#e0e0e0',
  },
  buttonContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  childrenImage: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  buttonText: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
