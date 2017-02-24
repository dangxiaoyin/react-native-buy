import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

var BottomCommonCell = React.createClass({
  getDefaultProps(){
    return{
      leftIcon:'',
      leftTitle:'',
      rightTitle:'',
    }
  },
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          { /*左边*/ }
          <View style={styles.leftViewStyle}>
            <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23,marginRight:5}} />
            <Text style={{fontSize:15}}>{this.props.leftTitle}</Text>
          </View>
          { /*右边*/ }
          <View style={styles.rightViewStyle}>
            <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            <Image  source={require('./../Source/common_arrow_right.png')} style={{width:8,height:13,marginRight:8,marginLeft:5}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    height:44,
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    //设置对其方式 两端对其
    justifyContent:'space-between',
    //设置下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5
  },
  leftViewStyle: {
    //改变主轴的方向
    flexDirection:'row',
    alignItems:'center',
    marginLeft:8
  },
  rightViewStyle: {
    flexDirection:'row',
    alignItems:'center'
  }
});

module.exports = BottomCommonCell;
