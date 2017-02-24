import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/* 导入外部组件类 */
var HomeDetail = require('./XMGHomeDetail');
var TopView = require('./XMGTopView');
var MiddleView = require('./XMGHomeMiddleView');
var MiddleBottomView = require('./XMGMiddleBottomView');
var ShopCenter = require('./XMGShopCenter');
var ShopCenterDetailView = require('./XMGShopCenterDetailView');
var GuestYouLike = require('./XMGGuestYouLike');

var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        { /*首页导航条*/ }
        {this.renderNavBar()}
        { /*首页的主要内容*/ }
        <ScrollView>
          { /*头部的view*/ }
          <TopView />
          { /*中间的View*/ }
          <MiddleView
            popToHome={()=>{this.pushToDetail()}}
          />
          { /*下半部分内容*/ }
          <MiddleBottomView
            popToHome={()=>{this.pushToDetail()}}
          />
          { /*购物中心*/ }
          <ShopCenter
            popToHomeView={(url)=>this.pushToShopCenterDetail(url)} //最终在这里拿到传递上来的参数
          />
          { /*猜你喜欢*/ }
          <GuestYouLike />
        </ScrollView>
      </View>
    );
  },

  // 首页导航条
  renderNavBar(){
    return(
      <View style={styles.navBarStyle}>
        { /*左边*/ }
        <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
          <Text style={{color:'white',marginTop:7}}>广州</Text>
        </TouchableOpacity>
        { /*中间*/ }
        <TextInput
          placeholder="输入商家，品类，商圈"
          style={styles.topInputStyle}
          />
        { /*右边*/ }
        <View style={styles.rightNavViewStyle}>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image source={{uri:'left_search'}} style={styles.navRightImageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image source={{uri:'code_display'}} style={styles.navRightImageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    )
  },
  //跳转到购物中心的详情页
  pushToShopCenterDetail(url){
    //测试一下传递上来的参数有没有获取到
    this.props.navigator.push(
      {
        component:ShopCenterDetailView,//要跳转的版块
        passProps:{'url':url}
      }
    );
  },


  // 跳转到二级界面
  pushToDetail(){
    this.props.navigator.push(
      {
        component: HomeDetail, // 要跳转的版块
        title: '详情页'
      }
    );
  }
});

var styles = StyleSheet.create({
  navBarStyle: { // 导航条样式
    height: 64,
    backgroundColor: '#1fb5ec',
    // 设置主轴方向
    flexDirection: 'row',
    // 垂直居中，设置侧轴的对其方式
    alignItems: 'center',
    // 设置主轴对其方式
    justifyContent: 'space-around'
  },
  rightNavViewStyle: {
    flexDirection: 'row',
    height: 64,
    //设置侧轴的对其方式
    alignItems: 'center',
    marginTop: 8
  },
  topInputStyle: { // 设置输入框
    width: width * 0.71,
    height: 31,
    backgroundColor: 'white',
    marginTop: 20,
    //设置圆角
    borderRadius: 15,
    //设置内左边距
    paddingLeft: 10,
    fontSize: 15
  },
  navRightImageStyle: { //设置图片的大小
    width: 23,
    height: 23,
  },
  container: {
    flex: 1,
    // justifyContent: 'center', // 主轴对其方式要去掉
    // alignItems: 'center',
    backgroundColor: '#E8E8E8',
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

module.exports = Home;
