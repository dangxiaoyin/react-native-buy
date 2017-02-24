import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

var MyCell = React.createClass({
  getDefaultProps(){
    return{
      leftIconName:'',
      leftTitle:'',
      rightIconName:'',
      rightTitle:''
    }
  },
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.container}>
          { /*左边*/ }
          <View style={styles.leftViewStyle}>
            <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle} />
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          { /*右边*/ }
          <View style={styles.rightViewStyle}>
            {this.rightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  //右边的内容
  rightSubView(){
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {this.renderRightContent()}
        { /*箭头*/ }
        <Image  source={require('./../Source/common_arrow_right.png')} style={{width:8,height:13,marginRight:8, marginLeft:5}} />
      </View>
    )
  },
  // 右边具体返回的值
  renderRightContent(){
    if (this.props.rightIconName.length == 0) { //不返回图片
      return(
        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
      )
    }else {
      return(
        <Image source={{uri:'h_9.png'}} style={{width:24,height:13}} />
      )
    }
  }
});

var styles = StyleSheet.create({
  container: {
    // 主轴方向
    flexDirection:'row',
    //主轴的对其方式
    justifyContent:'space-between',
    //背景颜色
    backgroundColor: 'white',
    //设置垂直居中
    alignItems: 'center',
    //高度
    height: 43,
    //下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5
  },
  leftViewStyle: {
    // 主轴方向
    flexDirection:'row',
    //侧轴居中
    alignItems:'center',
    //左外边距
    marginLeft: 8
  },
  rightViewStyle: {

  },
  leftImageStyle: { // 左边的图片
    width:25,
    height:25,
    marginRight:6,
    //设置圆角
    borderRadius:12
  },
  leftTitleStyle: {
    fontSize:15
  }
});

module.exports = MyCell;
