import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = Platform.OS == 'ios' ? 70 : 60;
var vMargin = (width - cellW * cols) / (cols + 1);


var TopListView = React.createClass({

  getDefaultProps(){
    return{
      dataArr: []
    }
  },
  getInitialState(){
    //创建数据源
    var ds = new ListView.DataSource({rowHasChanged:(row1, row2)=> row1 !== row2});
    return{
      dataSource: ds.cloneWithRows(this.props.dataArr)
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          contentContainerStyle={styles.contentViewStyle}
          //禁止上下滚动
          scrollEnabled={false}
        />
      </View>
    );
  },
  //具体的cell
  renderRow(rowdata){
    return(
          <View style={styles.cellStyle}>
            <TouchableOpacity onPress={()=>{alert('详情')}}>
                <Image source={{uri:rowdata.image}} style={{width:42,height:42}} />
                <Text style={styles.titleStyle}>{rowdata.title}</Text>
            </TouchableOpacity>
          </View>
    );
  },
});

var styles = StyleSheet.create({
  contentViewStyle: {
    //设置主轴方向
    flexDirection:'row',
    //多个cell在同一行显示
    flexWrap:'wrap',
    //宽度
    width:width
  },
  cellStyle: {
    backgroundColor:'white',
    width:cellW,
    height:cellH,
    //水平居中和垂直居中
    justifyContent:'center',
    alignItems:'center',
    //设置间距
    marginTop:5,
    marginLeft:vMargin
  },
  titleStyle: {
    fontSize: Platform.OS == 'ios' ? 13 : 12 ,
    textAlign:'center',
    color:'gray'
  }
});

module.exports = TopListView;
