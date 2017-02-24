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
var {width} = Dimensions.get('window');

var HeaderView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        { /*上部分*/ }
        {this.renderTopView()}
        { /*下部分*/ }
        {this.renderBottomView()}
      </View>
    );
  },

  // 上部分
  renderTopView(){
    return(
      <View style={styles.topViewStyle}>
        <Image source={{uri:'my_avator'}} style={styles.leftIconStyle}/>
        <View style={styles.centerViewStyle}>
          <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>react-native实战</Text>
          <Image source={require('./../Source/common_arrow_right.png')} style={{width:8,height:13,marginRight:8}} />
        </View>
      </View>
    )
  },

// 下部分
renderBottomView(){
  return(
    <View style={styles.bottomViewStyle}>
      {this.renderBottomItem()}
    </View>
  );
},
renderBottomItem(){
  // 数组
  var itemArr = [];
  //数据数组
  var data = [{'number':'100', 'titile':'码哥券'},{'number':'12', 'titile':'评价'},{'number':'50', 'titile':'收藏'},];
  //遍历创建组件装入数组
  for (var i = 0; i < data.length; i++) {
    //取出单独的数据
    var item = data[i];
    itemArr.push(
      <TouchableOpacity key={i}>
        <View style={styles.bottomInnerViewStyle}>
          <Text style={{color:'white',fontSize:16}}>{item.number}</Text>
          <Text style={{color:'white',fontSize:15,marginTop:5}}>{item.titile}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  //返回数组
  return itemArr;
}

});

var styles = StyleSheet.create({
  container: {
    height:400,
    backgroundColor: '#1fb5ec',
  },
  leftIconStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  centerViewStyle: {
    flexDirection:'row',
    width:width * 0.72,
  },
  topViewStyle: {
    flexDirection: 'row',
    marginTop: 250,
    //设置侧轴的对其方式
    alignItems: 'center',
    //设置主轴的对其方式
    justifyContent: 'space-around'
  },
  bottomViewStyle: {
    flexDirection:'row',
    //绝对定位
    position:'absolute',
    bottom: 0,
  },
  bottomInnerViewStyle: {
    width:width/3+1,
    height: 50,
    backgroundColor:'rgba(255,255,255,0.5)',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:1,
    borderRightColor:'white'
  }
});

module.exports = HeaderView;
