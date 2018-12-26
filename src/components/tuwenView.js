import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TuwenView extends Component {
    render(){
        return (
            <View style={styles.main}>
                <Text style={styles.story}>- ONE STORY -</Text>
                <Text style={styles.title}>收到匿名信的芭蕾教师</Text>
                <Text style={styles.author}>文 / 强雯</Text>
                <Image source={require('../assets/images/try.jpg')} style={{height:275,width:'100%'}} resizeMode={'contain'}></Image>
                <Text style={styles.content}>他就这样在人群里踱步，做砖头，有赚头，整个身体保持着芭蕾的矜持，可在别人看来倒像一直傻头傻脑的黑山羊，在嶙峋的岩石丛林中，既不知进也不懂退</Text>
                <View style={styles.bottom}>
                    <Text style={{color : 'rgba(198,198,196,1)', fontSize: 14,}}>12月25日</Text>
                    <View style={styles.icons}>
                        <Image source={require('../assets/images/heart.png')}/>
                        <Image source={require('../assets/images/share.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main : {
        backgroundColor : '#ffffff',
        marginTop : 10,
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
        flexDirection:'row'
    },
    icons: {
        
    }
})