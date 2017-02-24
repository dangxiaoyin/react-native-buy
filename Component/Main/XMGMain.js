import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform, //判断当前运行的系统 Platform.OS === 'ios'
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');

var Main = React.createClass({

  // 初始化函数(变量是可以改变的，充当状态机的角色)
  getInitialState() {
    return {
      selectedTab:'home'
    }
  },

  render() {
    return (
      <TabNavigator>
        { /*首页*/ }
        <TabNavigator.Item
          title="首页"
          renderIcon={() => <Image source={require('./../Source/zr_exam.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('./../Source/zr_exam_h.png')} style={styles.iconStyle} />}
          onPress={() => {this.setState({ selectedTab: 'home' })}}
          selected={this.state.selectedTab === 'home'}
          >
          <Navigator
            initialRoute={{name:'首页',component:Home}}
            configureScene={(route,navigator)=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
          />
        </TabNavigator.Item>
        { /*商家*/ }
        <TabNavigator.Item
          title="商家"
          renderIcon={() => <Image source={require('./../Source/zr_home.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('./../Source/zr_home_h.png')} style={styles.iconStyle} />}
          onPress={() => {this.setState({ selectedTab: 'shop' })}}
          selected={this.state.selectedTab === 'shop'}
          >
            <Navigator
              initialRoute={{name:'商家',component:Shop}}
              configureScene={(route,navigator)=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>;
              }}
            />
        </TabNavigator.Item>
        { /*我的*/ }
        <TabNavigator.Item
          title="我的"
          renderIcon={() => <Image source={require('./../Source/zr_konwledge.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('./../Source/zr_konwledge_h.png')} style={styles.iconStyle} />}
          onPress={() => {this.setState({ selectedTab: 'mine' })}}
          selected={this.state.selectedTab === 'mine'}>
          <Navigator
            initialRoute={{name:'我的',component:Mine}}
            configureScene={(route,navigator)=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
          />
        </TabNavigator.Item>
        { /*更多*/ }
        <TabNavigator.Item
          title="更多"
          renderIcon={() => <Image source={require('./../Source/zr_train.png')} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={require('./../Source/zr_train_h.png')} style={styles.iconStyle} />}
          onPress={() => {this.setState({ selectedTab: 'more' })}}
          selected={this.state.selectedTab === 'more'}
          >
            <Navigator
              initialRoute={{name:'更多',component:More}}
              configureScene={(route,navigator)=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>;
              }}
            />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  iconStyle: {
    width: 22,
    height: 22
  }
});

module.exports = Main;
