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

var CommonView = require('./XMGMiddleCommonView');
//引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        { /*左边*/ }
        {this.renderLeftView()}
        { /*右边*/ }
        <View>
          {this.renderRightView()}
        </View>
      </View>
    );
  },
  //左边的View
  renderLeftView(){
    //拿到对应的数据
    var data = TopMiddleData.dataLeft[0];
    return(
      <TouchableOpacity>
        <View style={styles.leftViewStyle}>
          <Image source={{uri:data.img1}} style={styles.leftImageStyle} />
          <Text style={{color:'gray'}}>{data.title}</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
            <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  //右边的view
  renderRightView(){
    //组件数组
    var itemArr = [];
    //取出具体数据
    var rightData = TopMiddleData.dataRight;
    // 遍历
    for (var i = 0; i < rightData.length; i++) {
      //取出单独的数据
      var data = rightData[i];
      itemArr.push(
        <CommonView
          key={i}
          title={data.title}
          subTitle={data.subTitle}
          rightIcon={data.rightImage}
          titleColor={data.titleColor}
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
    marginTop: 15,
    //改变主轴的方向
    flexDirection: 'row',
  },
  leftViewStyle: {
    width:width * 0.5,
    height: 119,
    backgroundColor: 'white'
    ,marginRight: 1,
    //水平居中
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftImageStyle: {
    width:120,
    height: 40,
    margin:10
    //内容模式
    // resizeMode:'contain'
  }
});

module.exports = HomeMiddleView;
