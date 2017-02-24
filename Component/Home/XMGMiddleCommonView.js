import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var CommonView = React.createClass({
  getDefaultProps(){
    return{
      title: '',
      subTitle: '',
      rightIcon: '',
      titleColor: '',
      tplurl:'',  //下级界面url路径
      callBackClickCell:null  //回调函数
    }
  },
  render() {
    return (
      <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
        <View style={styles.container}>
            { /*左边*/ }
            <View>
              <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
              <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
            </View>
            { /*右边*/ }
            <Image source={{uri:this.props.rightIcon}} style={{width:60,height:40}} />
        </View>
      </TouchableOpacity>
    );
  },
  clickCell(){
    this.props.callBackClickCell();
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.5 - 1,
    height: 59,
    marginBottom: 1,
    marginRight: 1,
    //改变主轴方向
    flexDirection:'row',
    //侧轴居中
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  subTitleStyle: {
    color: 'gray',
    marginTop: 5,
    fontSize: 13
  }
});

module.exports = CommonView;
