import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TuwenView extends Component {
    render(){
        return (
            <View style={styles.main}>
                <Text style={styles.story}>- {this.props.data.title} -</Text>
                <Text style={styles.title}>{this.props.data.article}</Text>
                <Text style={styles.author}>文 / {this.props.data.author}</Text>
                <Image source={require('../assets/images/try.jpg')} style={{height:275,width:'100%'}} resizeMode={'contain'}></Image>
                <Text style={styles.content}>{this.props.data.content}</Text>
                <View style={styles.bottom}>
                    <Text style={{color : 'rgba(198,198,196,1)', fontSize: 14,}}>{this.props.data.date}</Text>
                    <View style={styles.icons}>
                        <Image source={require('../assets/images/heart.png')} style={{width:18,height:18,marginRight:20}}/>
                        <Image source={require('../assets/images/share.png')} style={{width:18,height:18}}/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main : {
        backgroundColor : '#ffffff',
        marginTop : 5,
        paddingHorizontal: 20
    },
    story:{
        color : 'rgba(198,198,196,1)',
        fontSize : 14,
        textAlign:'center',
        paddingTop: 9
    },
    title:{
        color:'#282C34',
        fontSize: 20,
        marginVertical: 15
    },
    author:{
        color:'#A8A8A8',
        fontSize: 16
    },
    content: {
        color:'#A8A8A8',
        fontSize: 16,
        lineHeight: 30
    },
    bottom:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:10,
        position:'relative'
    },
    icons: {
        position:'absolute',
        flexDirection:'row',
        right:0
    }
})