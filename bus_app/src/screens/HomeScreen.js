import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  _onPress(){
     
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bus for Children</Text>
        <Image style={styles.childrenImage} source={require('../image/children.png')} />
        <TouchableOpacity style={styles.buttonContainer} onPress={this._onPress}>
          <Image source={require('../image/button.png')} />
          <Text style={styles.buttonText}>동영상 보기</Text>
        </TouchableOpacity>
      </View>
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
    color:"#e0e0e0"
  },
  buttonContainer: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  childrenImage:{
      width: 350,
      height: 200,
      marginBottom: 40
  },
  buttonText: {
    position: 'absolute',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    
  },
});
