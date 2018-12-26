import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import ImgView from './src/components/imgView';
import TuwenView from './src/components/tuwenView';

export default class One extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.date}>
            <Text style={styles.ri}>26</Text>
            <Text style={styles.year}>Dec.2018</Text>
            <Text style={styles.earth}>地球 · 对流层 -275c</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <ImgView></ImgView>
          <View style={styles.zhedie}>
            <Text style={{fontSize:14}}>一个</Text>
            <Text style={{marginLeft:7,marginRight:7,fontSize:14}}>VOL.1227</Text>
            <Image source={require('./src/assets/images/down.png')} style={{width:12,height:12}}></Image>
          </View>
          <TuwenView></TuwenView>
        </ScrollView>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  zhedie:{
    flexDirection:'row',
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:'#ffffff',
    marginTop:10,
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
   backgroundColor: 'rgba(239,236,237,1.0)' 
  },
  date:{
    flexDirection : 'row',
    flex: 1,
    position:'relative',
  },
  ri: {
    paddingRight: 7,
    fontSize: 24, 
    fontWeight: 'bold',
    color : 'black',
  },
  year: {
    fontSize: 10,
    color : 'black',
    position:'absolute',
    bottom: 2,
    left:30
  },
  earth: {
    position:'absolute',
    right:0,
    bottom:2,
    fontSize:11,
    color:'rgba(198,198,196,1)'
  },
  scrollView: {
    backgroundColor: 'rgba(239,236,237,1.0)'
  },
})