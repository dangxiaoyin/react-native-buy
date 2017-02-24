import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView
} from 'react-native';

// 导入外部组件
var CommonCell = require('./XMGBottomCommonCell');
//导入外部的json数据
var YouLikeData = require('../../LocalData/HomeGuestYouLike');

var GuestYouLike = React.createClass({
getDefaultProps(){
  return{
    api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6'
  }
},

  getInitialState(){
    //创建数据源
    var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
    //初始化数据源
    return {
      dataSource: ds
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <CommonCell
          leftIcon='h_7'
          leftTitle='猜你喜欢'
        />
        { /*列表*/ }
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  },

  renderRow(rowData){
    return(
      <TouchableOpacity onPress={()=>alert(0)}>
        <View style={styles.listViewStyle}>
          { /*左边*/ }
          <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle}/>
          { /*右边*/ }
          <View style={styles.rightViewStyle}>
            <View style={styles.rightTopViewStyle}>
              <Text>{rowData.title}</Text>
              <Text>{rowData.topRightInfo}</Text>
            </View>
            <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
            <View style={styles.rightBottomViewStyle}>
              <Text style={{color:'red'}}>{rowData.subMessage}</Text>
              <Text>{rowData.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  },

  //处理图像的尺寸
  dealWithImgUrl(url){
    if (url.search('w.h') == -1) { //没有找到，正常返回
      return url;
    }else {
      return url.replace('w.h','120.90');
    }
  },

componentDidMount(){
  //从网络上请求数据
  this.loadDataFromNet();
},
loadDataFromNet(){
  fetch(this.props.api_url)
  .then((response) => response.json()) //下一步操作
  .then((responseData) => {
    console.log(responseData); //打印出来
    //更新数据源
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(responseData.data)
    });
  })
  .catch((error)=>{
    // alert(error);
    //更新数据源
    this.setState({
      //当网络请求异常时，从本地加载数据
      dataSource:this.state.dataSource.cloneWithRows(YouLikeData.data)
    });

  })
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    marginTop:15
  },
  imageViewStyle: {
    width:120,
    height:90
  },
  listViewStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5,
    flexDirection:'row'
  },
  rightViewStyle: {
    marginLeft:8,
    width:220,
    justifyContent:'center'
  },
  rightTopViewStyle: {
    flexDirection:'row',
    marginBottom:7,
    justifyContent:'space-between'
  },
  rightBottomViewStyle: {
    flexDirection:'row',
    marginTop:7,
    justifyContent:'space-between'
  }
});

module.exports = GuestYouLike;
