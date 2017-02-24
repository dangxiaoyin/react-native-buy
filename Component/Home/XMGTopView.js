import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');

// 引入外部组件
var TopListView = require('./XMGTopListView');

var TopView = React.createClass({

  getInitialState(){
    return{
      activePage: 0
    }
  },

  render() {
    return (
      <View style={styles.container}>
        { /*内容部分*/ }
        <ScrollView
          //滚动方向 横向还是竖向
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd = {this.onScrollAnimationEnd}
          >
          {this.renderScrollItem()}
        </ScrollView>
        { /*页码部分*/ }
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  },

//当一祯滚动结束的时候调用
onScrollAnimationEnd(e){
  //求出当前的页码
  var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);//取整
  //更新状态机
  this.setState({
    activePage: currentPage
  });
},

  //ScrollView中内部的组件
  renderScrollItem(){
    //定义组件数组
    var itemArr = [];
    //定义颜色数组 ---> 数据数组
    var dataArr = TopMenu.data;
    //遍历创建组件
    for (var i = 0; i < dataArr.length; i++) {
      itemArr.push(
        <TopListView key={i}
          dataArr={dataArr[i]}
         />
      );
    }
    //返回组件数组
    return itemArr;
  },

  //页码（指示器）
  renderIndicator(){
    //指示器数组
    var indicatorArr = [], style;
    //遍历创建组件
    for (var i = 0; i < 2; i++) {
      //设置圆点的样式
      style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'}
      indicatorArr.push(
        <Text key={i} style={[{fontSize:20},style]}>&bull;</Text> //圆点
      );
    }
    //返回数组
    return indicatorArr;
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop:15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  indicatorViewStyle: {
    //设置主轴方向，横向
    flexDirection: 'row',
    //水平居中
    justifyContent: 'center'
  }
});

module.exports = TopView;
