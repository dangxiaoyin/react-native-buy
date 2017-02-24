import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

// 导入外部的组件
var MyCell = require('./XMGCommonMyCell');
var MineMiddleView = require('./XMGMineMiddleView');
var MineHeaderView = require('./XMGMineHeaderView');

var Mine = React.createClass({
  render() {
    return (
      <ScrollView
        style={styles.scrollViewStyle}
        //内容相对于滚动视图边缘的坐标
        //吸顶的效果
        //这两个属性目前只支持ios 对安卓没有效果
        contentInset = {{top:-200}}
        contentOffset = {{y:200}}
        >
          <MineHeaderView />
          <View style={{marginTop:20}}>
            <MyCell
              leftIconName="h_7.png"
              leftTitle="我的订单"
              rightTitle="查看全部订单"
            />
            <MineMiddleView />
          </View>
        <View style={{marginTop:20}}>
          <MyCell
            leftIconName="coupon_1.png"
            leftTitle="RN钱包"
            rightTitle="账户余额：￥100"
          />
          <MyCell
            leftIconName="h_2.png"
            leftTitle="抵用券"
            rightTitle="10张"
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell
            leftIconName="h_3.png"
            leftTitle="积分商城"
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell
            leftIconName="h_5.png"
            leftTitle="今日推荐"
            rightIconName="coupon_1.png"
          />
        </View>
        <View style={{marginTop:20}}>
          <MyCell
            leftIconName="h_10.png"
            leftTitle="我要合作"
            rightTitle="轻松开店，招财进宝"
          />
        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  scrollViewStyle: {
    backgroundColor:'#e8e8e8'
  }
});

module.exports = Mine;
