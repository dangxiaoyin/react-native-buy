import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var MiddleData = require('./MiddleData.json');

var MineMiddleView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {this.renderAllItem()}
      </View>
    );
  },

  renderAllItem(){
    // 定义组件数组
    var itemArr = [];
    // 遍历
    for (var i = 0; i < MiddleData.length; i++) {
      //取出单独的数据
      var data = MiddleData[i];
      //创建组件装入数组
      itemArr.push(
        <InnerView key={i} iconName={data.iconName} title={data.title} />
      );
    }
    // 返回
    return itemArr;
  }

});

var InnerView = React.createClass({
  getDefaultProps(){
    return{
      iconName: '',
      title:''
    }
  },
  render(){
    return(
      <View>
        <Image source={{uri:this.props.iconName}} style={{width:25,height:25,marginLeft:10}} />
        <Text style={{marginTop:8}}>{this.props.title}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    //设置主轴方向
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'space-around'

  }
});

module.exports = MineMiddleView;
