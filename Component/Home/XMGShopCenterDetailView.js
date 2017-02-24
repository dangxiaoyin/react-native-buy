import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native';

var ShopCenterDetailView = React.createClass({
  render() {
    alert(this.props.url);
    return (
      <View style={styles.container}>
        { /*导航条*/ }
        {this.renderNavBar()}

        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri:this.props.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          />
      </View>
    );
  },

popToHome(){
  this.props.navigator.pop();
},
// 导航条
renderNavBar(){
  return(
    <View style={styles.navOutViewStyle}>
      <TouchableOpacity onPress={()=>{this.popToHome()}} style={styles.leftViewStyle}>
        <Image source={{uri:'common_back'}} style={styles.navImagStyle} />
      </TouchableOpacity>
      <Text style={{color:'white', fontSize:16, fontWeight:'bold', marginTop:18}}>商家</Text>
      <TouchableOpacity onPress={()=>{alert('点击')}} style={styles.rightViewStyle}>
        <Image source={{uri:'code_display'}} style={styles.navImagStyle} />
      </TouchableOpacity>
    </View>
  )
}

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navImagStyle: {
    width: 23,
    height: 23,
  },
  leftViewStyle: {
    //绝对定位
    position: 'absolute',
    left: 10,
    bottom: 13
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
  }
});

module.exports = ShopCenterDetailView;
