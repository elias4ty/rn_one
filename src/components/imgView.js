import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class ImgView extends Component{
    render(){
        return (
            <View style={styles.imgView}>
                <Image source={require('../assets/images/try.jpg')} resizeMode={'contain'} style={{height:275,width:'100%'}}/>
                <View>
                    <Text style={styles.title}>摄影 | 纳兰性急</Text>
                    <Text style={styles.word}>我要成为幸福光景的一部分，成为圣诞节里其中一张幸福的笑脸</Text>
                    <Text style={styles.author}>风版大河</Text>
                    <View style={styles.imgBar}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../assets/images/find.png')} style={{height:18,width:18}}/>
                            <Text style={styles.imgBottom}>发现</Text>
                        </View>
                        <View style={{flexDirection:'row',position:'absolute',right:0}}>
                            <Image source={require('../assets/images/edit.png')} style={{width:18,height:18,marginLeft:20}}/>
                            <Image source={require('../assets/images/book.png')} style={{width:18,height:18,marginLeft:20}}/>
                            <Image source={require('../assets/images/share.png')} style={{width:18,height:18,marginLeft:20}}/>
                            <Image source={require('../assets/images/heart.png')} style={{width:18,height:18,marginLeft:20}}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgView:{
        backgroundColor: '#ffffff'
      },
      title:{
        color: 'rgba(198,198,196,1)',
        paddingTop: 7,
        fontSize: 14,
        textAlign: 'center'
      },
      word: {
        color: '#282C34',
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 50,
        marginTop: 50, 
        lineHeight: 30,
      },
      author: {
        color: 'rgba(198,198,196,1)',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 50    
      },
      imgBottom: {
        color: 'rgba(198,198,196,1)',
        fontSize: 13,
        marginLeft: 4,
      },
      imgBar: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        flexDirection: 'row',
        position:'relative'
      }
})