import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform } from 'react-native';
import ImgView from '../components/imgView';
import TuwenView from '../components/tuwenView';
import BottomView from '../components/bottomView';

export default class One extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      img:{
        width:0,
        height:0
      }
    }
  }

  componentWillMount(){
    fetch('../data.json',{
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-Type": 'application/json',
      },
      body: JSON.stringify({})
    }).then(res => {
      this.setState({
        data : [{
          "title" : "ONE STORY",
          "article" : "收到匿名信的芭蕾教师",
          "author": "强雯",
          "content": "他就这样在人群里踱步，做砖头，有赚头，整个身体保持着芭蕾的矜持，可在别人看来倒像一直傻头傻脑的黑山羊，在嶙峋的岩石丛林中，既不知进也不懂退",
          "date" : "12月25日"
        },
        {
          "title" : "Be As One",
          "article" : "让我们携手唾弃未来",
          "author": "金子琪等四位",
          "content": "不再逃避期待，而是学会承受期待的落空",
          "date" : "今天"
        },
        {
          "title" : "连载",
          "article" : "五常店39",
          "author": "孙为",
          "content": "王小山顿时就解开了凯文刘的谜题",
          "date" : "昨天"
        }]
      })
   }).catch(e=>{
      console.log('123123'+e);
      this.setState({
      data : [{
        "title" : "ONE STORY",
        "article" : "收到匿名信的芭蕾教师",
        "author": "强雯",
        "content": "他就这样在人群里踱步，做砖头，有赚头，整个身体保持着芭蕾的矜持，可在别人看来倒像一直傻头傻脑的黑山羊，在嶙峋的岩石丛林中，既不知进也不懂退",
        "date" : "12月25日"
      },
      {
        "title" : "Be As One",
        "article" : "让我们携手唾弃未来",
        "author": "金子琪等四位",
        "content": "不再逃避期待，而是学会承受期待的落空",
        "date" : "今天"
      },
      {
        "title" : "连载",
        "article" : "五常店39",
        "author": "孙为",
        "content": "王小山顿时就解开了凯文刘的谜题",
        "date" : "昨天"
      }]
    })     
   })
  }

  render() {

    let tuwens = this.state.data.map((tuwen, index) => 
        <TuwenView data={tuwen} key={index}></TuwenView>
    );

    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.date}>
            <Text style={styles.ri}>26</Text>
            <Text style={styles.year}>Dec.2018</Text>
            <Text style={styles.earth}>地球 · 对流层 -275c</Text>
          </View>
        </View>
        <View style={{position:'absolute',top:53,bottom:40,width:'100%'}}>
          <ScrollView>
            <ImgView/>
            <View style={styles.zhedie}>
              <Text style={{fontSize:14}}>一个</Text>
              <Text style={{marginLeft:7,marginRight:7,fontSize:14}}>VOL.1227</Text>
              <Image source={require('../assets/images/down.png')} style={{width:12,height:12}}></Image>
            </View>
            {tuwens}
            <BottomView/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    position:'relative',
    flex:1
  },
  zhedie:{
    flexDirection:'row',
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:'#ffffff',
    marginTop:5,
    flex:1,
    justifyContent : 'center',
    alignItems:'center'
  },
  header: {
    marginTop:13,
    position:'absolute',
    flexDirection:'row',
    top:0,
    width:'100%', 
    height: 40,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5, 
    backgroundColor: 'rgba(239,236,237,1.0)' 
  },
  date:{
    flexDirection : 'row',
    alignItems:'flex-end',
    height:30,
    position:'relative',
    flex:1
  },
  ri: {
    marginRight: 5,
    fontSize: 24, 
    fontWeight: 'bold',
    color : 'black',
    paddingTop:3,
    lineHeight:24
  },
  year: {
    fontSize: 10,
    color : 'black',
    paddingBottom: 2,
    lineHeight:10
  },
  earth: {
    position:'absolute',
    right:0,
    bottom:2,
    fontSize:11,
    color:'rgba(198,198,196,1)'
  }
});