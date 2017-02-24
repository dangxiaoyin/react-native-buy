import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
//引入外部的组件类
var CommonCell = require('./XMGBottomCommonCell');
//引入外部json数据
var Home_D5 = require('../../LocalData/XMG_Home_D5');

var ShopCenter = React.createClass({
  getDefaultProps(){
    //回调函数
    return{
      popToHomeView:null
    }
  },
  render() {
    return (
      <View style={styles.container}>
        { /*上部分*/}
        <CommonCell
          leftIcon='h_7'
          leftTitle='购物中心'
          rightTitle={Home_D5.tips}
        />
        { /*下部分*/ }
        <ScrollView style={styles.scrollViewStyle}
          horizontal={true} //横向
          showsHorizontalScrollIndicator={false}
          >
          {this.renderAllItem()}
        </ScrollView>
      </View>
    );
  },

  //返回下部分所有的item
  renderAllItem(){
    //定义组件数组
    var itemArr = [];
    //取出数据
    var shopData = Home_D5.data;
    //遍历
    for (var i = 0; i < shopData.length; i++) {
      // 取出单个数据
      var data = shopData[i];
      //创建组件装入数组
      itemArr.push(
        <ShopCenterItem
        shopImage={data.img}
        shopSale={data.showtext.text}
        shopName={data.name}
        key={i}
        detailurl={data.detailurl}
        popToShopCenter={(url)=>this.popToHome(url)} // 参数往上传，用来接收
      />
      )
    }
    //返回
    return itemArr;
  },
  //参数继续往上传
  popToHome(url){
    //判断
    if(this.props.popToHomeView == null) return;
    //执行回调函数
    this.props.popToHomeView(url);
  }
});

// 每一个商场
var ShopCenterItem = React.createClass({
  getDefaultProps(){
    return{
      shopImage:'',
      shopSale:'',
      shopName:'',
      detailurl:'',
      popToShopCenter:null
    }
  },
  render(){
    return(
      <TouchableOpacity onPress={()=>{this.clickItem(this.props.detailurl)}}>
        <View style={styles.itemViewStyle}>
          <Image source={{uri:this.props.shopImage}} style={styles.imageStyle} />
          <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
          <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
        </View>
      </TouchableOpacity>
    );
  },
  // 参数往上传
  clickItem(url){
    //判断
    if(this.props.detailurl == null) return;
    //执行回调函数
    this.props.popToShopCenter(url);
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  imageStyle: {
    width:120,
    height:100,
    borderRadius:8
  },
  scrollViewStyle: {
    flexDirection:'row',
    backgroundColor:'white',
    padding:10
  },
  itemViewStyle: {
    margin:8
  },
  shopSaleStyle: {
    //绝对定位
    position:'absolute',
    left:0,
    bottom:30,
    backgroundColor:'red',
    color:'white',
    padding:3,
    //这两个属性在ios中不管用，可以不设置
    borderTopRightRadius:8,
    borderBottomRightRadius:8
  },
  shopNameStyle: {
    textAlign: 'center',
    marginTop:5
  }
});

module.exports = ShopCenter;
