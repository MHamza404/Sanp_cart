import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ImageBackground,alignItems,resizeMode,styles,Dimensions,TextInput,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {width,height}=Dimensions.get('screen');
export default class Profile extends Component {
    static navigationOptions={
        header:null
      }
    render() {
        var navigation =this.props.navigation;
      return (
        <View style={{flex:1}}>
        <ImageBackground source={require('./assets/Image/template11.jpg')} style={{flex:1,alignItems:'center',justifyContent:'center',}}resizeMode='stretch'>
        <TextInput style={{top:50,borderRadius:20,borderWidth:4,width:150,height:40}} placeholder='User name'></TextInput>
        <TextInput style={{top:70,borderRadius:20,borderWidth:4,width:150,height:40}} placeholder='Password'></TextInput>
        <TextInput style={{top:80,borderRadius:20,borderWidth:4,width:150,height:40}} placeholder='Phone Number'></TextInput>
        <TextInput style={{top:100,borderRadius:20,borderWidth:4,width:150,height:40}} placeholder='Email'></TextInput>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} style={{top:120,borderRadius:10,borderWidth:4,width:100,height:30}}>
        <Text style={{alignItems:'center',marginLeft:30}}>SignUp</Text>
        </TouchableOpacity>
         </ImageBackground>
        </View>
      );
    }}