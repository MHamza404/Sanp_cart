
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,alignItems,resizeMode,styles,Dimensions,TextInput,TouchableOpacity} from 'react-native';
import Profile from './Profile';
import App from './App';
import thirdpage from './thirdpage';
import SignUp from './SignUp';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Application = StackNavigator({
    Home: { screen: App },
    Profile: { screen: Profile},
    thirdpage:{screen: thirdpage},
    SignUp:{screen: SignUp}
  });
 
export default class Home extends Component {
    render() {
      return (
       <Application/>
      );
    }}