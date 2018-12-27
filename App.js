import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Platform } from 'react-native';
import ImgView from './src/components/imgView';
import TuwenView from './src/components/tuwenView';
import BottomView from './src/components/bottomView';
import FooterView from './src/components/footerView';

export default class One extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.date}>
            <Text style={styles.ri}>26</Text>
            <Text style={styles.year}>Dec.2018</Text>
            <Text style={styles.earth}>地球 · 对流层 -275c</Text>
          </View>
        </View>
        <ScrollView>
          <ImgView></ImgView> 
          <View style={styles.zhedie}>
            <Text style={{fontSize:14}}>一个</Text>
            <Text style={{marginLeft:7,marginRight:7,fontSize:14}}>VOL.1227</Text>
            <Image source={require('./src/assets/images/down.png')} style={{width:12,height:12}}></Image>
          </View>
          <TuwenView></TuwenView>
          <BottomView></BottomView>
        </ScrollView>
        <FooterView></FooterView>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    ...Platform.select({
      ios: {
        marginBottom:55
      }
    }),
    backgroundColor: 'rgba(239,236,237,1.0)',
    position:'relative'
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
   height: 40,
   paddingTop: 5,
   paddingLeft: 15,
   paddingRight: 15,
   paddingBottom: 5, 
   marginTop:13,
   backgroundColor: 'rgba(239,236,237,1.0)' 
  },
  date:{
    flexDirection : 'row',
    alignItems:'flex-end',
    height:30
  },
  ri: {
    marginRight: 5,
    fontSize: 24, 
    fontWeight: 'bold',
    color : 'black',
    ...Platform.select({
      ios: {
       paddingTop:3
      }
    })
  },
  year: {
    fontSize: 10,
    color : 'black',
    ...Platform.select({
      ios: {
        paddingBottom: 2
      }
    })
  },
  earth: {
    position:'absolute',
    right:0,
    bottom:2,
    fontSize:11,
    color:'rgba(198,198,196,1)'
  }
})