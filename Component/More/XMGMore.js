import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var CommonCell = require('./XMGCommonCell');

var More = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        { /*导航条*/ }
        {this.renderNavBar()}

      <ScrollView>
        <View style={{marginTop:20}}>
          <CommonCell
            title='扫一扫'
          />
        </View>
        <View style={{marginTop:20}}>
          <CommonCell
            title='省流量模式'
            isSwitch={true}
          />
          <CommonCell
            title='消息提醒'
          />
          <CommonCell
            title='邀请好友'
          />
          <CommonCell
            title='清除缓存'
            rightTitle='1.99M'
          />
        </View>
        <View style={{marginTop:20}}>
          <CommonCell
            title='意见反馈'
          />
          <CommonCell
            title='问卷调查'
          />
          <CommonCell
            title='支付帮助'
          />
          <CommonCell
            title='网络诊断'
          />
          <CommonCell
            title='关于react-native'
          />
          <CommonCell
            title='精品应用'
          />
        </View>
      </ScrollView>
      </View>
    );
  },

  // 导航条
  renderNavBar(){
    return(
      <View style={styles.navOutViewStyle}>
        <Text style={{color:'white', fontSize:16, fontWeight:'bold', marginTop:18}}>更多</Text>
        <TouchableOpacity onPress={()=>{alert('点击')}} style={styles.rightViewStyle}>
          <Image source={require('./../Source/slide_feedback.png')} style={styles.navImagStyle} />
        </TouchableOpacity>
      </View>
    )
  }


});

var styles = StyleSheet.create({
  navImagStyle: {
    width: 23,
    height: 23,
  },
  rightViewStyle: {
    //绝对定位
    position: 'absolute',
    right: 10,
    bottom: 13
  },
  navOutViewStyle: {
    height: 64,
    backgroundColor: '#1fb5ec',
    // 设置主轴方向
    flexDirection: 'row',
    // 垂直居中，设置侧轴的对其方式
    alignItems: 'center',
    // 设置主轴放心居中
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = More;
