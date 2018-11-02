
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
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('thirdpage')} style={{top:60,borderRadius:10,borderWidth:4,width:150,height:70}}>
        <Text style={{alignItems:'center',marginLeft:55}}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('thirdpage')} style={{top:90,borderRadius:10,borderWidth:4,width:150,height:70}}>
        <Text style={{alignItems:'center',marginLeft:55}}>Online</Text>
        </TouchableOpacity>
         </ImageBackground>
        </View>
      );
    }}