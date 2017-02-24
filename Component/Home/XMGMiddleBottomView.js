import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Home_D4 = require('../../LocalData/XMG_Home_D4.json');
var CommonView = require('./XMGMiddleCommonView');

var BottomView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        { /*上部分*/ }
        <View style={styles.topViewStyle}>

        </View>
        { /*下部分*/ }
        <View style={styles.bottomViewStyle}>
          {this.renderBottomItem()}
        </View>
      </View>
    );
  },
  //下部分的所有子组件
  renderBottomItem(){
    //定义组件数组
    var itemArr = [];
    // 拿到对应的数据
    var dataArr = Home_D4.data;
    //遍历
    for (var i = 0; i < dataArr.length; i++) {
      //取出单独的数据
      var itemData = dataArr[i];
      //创建组件装入数组
      itemArr.push(
        <CommonView
          key={i}
          title={itemData.mainTitle}
          subTitle={itemData.deputytitle}
          rightIcon={itemData.imageurl}
          titleColor={itemData.typeface_color}
          tplurl = {itemData.tplurl}
          callBackClickCell={(data)=>this.popToTopView(data)}
         />
      );
    }
    //返回组件数组
    return itemArr;
  },
  //继续往父级界面传递数据
  popToTopView(data){
    //继续执行回调函数
    this.props.popToHome(data);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:15
  },
  topViewStyle: {

  },
  /*
  flexWrap为wrap不起作用解决之道:

  解释原因：由于在rn 0.28之后的版本上官方已经修改了flexWrap:'wrap'的工作方式了，
  之前版本的是flexWrap:'wrap'和默认的alignItems: 'stretch'是一起工作的；
  如果是0.28之后的版本，你需要加上alignItems: 'flex-start'
  */
  bottomViewStyle: {
    //设置主轴的方向
    flexDirection: 'row',
    //换行
    flexWrap: 'wrap',
    alignItems:'flex-start'
  }
});

module.exports = BottomView;
