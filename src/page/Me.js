import React,{ Component } from 'react';
import { ScrollView, View, Image, ImageBackground, Text, StyleSheet } from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <ScrollView>
                <ImageBackground source={require('../assets/images/sea.jpg')} style={{width:'100%',height:400}}>
                    <View style={styles.header}>
                        <Image source={require('../assets/images/setting.png')} style={{width:20,height:20,position:'absolute',left:15}}/>
                        <Image source={require('../assets/images/msg.png')} style={{width:20,height:20,position:'absolute',right:15}}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../assets/images/me.png')} style={{width:60,height:60,borderColor:'#ffffff',borderRadius:30,borderWidth:1,backgroundColor:'#282C34'}} resizeMode={'stretch'}></Image>
                        <Text style={{marginTop:10,fontSize:20,color:'#ffffff'}}>Elias</Text>
                        <View style={{width:164,height:125,backgroundColor:'#ffffff',borderColor:'#ffffff',borderWidth:2,borderRadius:2,marginTop:30}}>
                            <ImageBackground source={require('../assets/images/sundown.jpg')} style={{width:160,height:100,justifyContent:'center',alignItems:'center'}}>
                                <View style={{backgroundColor:'rgba(0,0,0,0.4)',borderWidth:1,borderColor:'#ffffff',flexDirection:'row',alinItems:'center',paddingHorizontal:13,paddingVertical:6}}>
                                    <Image source={require('../assets/images/write.png')} style={{width:14,height:14,marginRight:6}}></Image>
                                    <Text style={{color:'#ffffff'}}>制作小记</Text>
                                </View>
                            </ImageBackground>
                            <Text numberOfLines={1} style={{textAlign:'center',color:'rgba(73,73,73,1)',paddingHorizontal:10,paddingVertical:5,fontSize:12}}>爱的终结者是顺境，而不是逆境。</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{backgroundColor:'#ffffff',marginVertical:10}}>
                    <Text style={{color:'rgba(73,73,73,1)',fontSize:14,marginTop:10,marginLeft:20}}>我的收藏</Text>
                    <View style={{margin:25,justifyContent:'space-between',flexDirection:'row'}}>
                        <View style={{justifyContent:'space-between'}}>
                            <Image source={require('../assets/images/tuwen.png')} style={{width:30,height:30,marginBottom:5}}></Image>
                            <Text style={{fontSize:16,color:'#dbdbdb'}}>图文</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Image source={require('../assets/images/article.png')} style={{width:30,height:30,marginBottom:5}}></Image>
                            <Text style={{fontSize:16,color:'#dbdbdb'}}>文章</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Image source={require('../assets/images/music.png')} style={{width:30,height:30,marginBottom:5}}></Image>
                            <Text style={{fontSize:16,color:'#dbdbdb'}}>音乐</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Image source={require('../assets/images/video.png')} style={{width:30,height:30,marginBottom:5}}></Image>
                            <Text style={{fontSize:16,color:'#dbdbdb'}}>影视</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Image source={require('../assets/images/radio.png')} style={{width:30,height:30,marginBottom:5}}></Image>
                            <Text style={{fontSize:16,color:'#dbdbdb'}}>电台</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal:15,paddingVertical:10,flexDirection:'row',backgroundColor:'#ffffff',position:'relative',alignItems:'center'}}>
                    <Image style={{marginRight:10,width:16,height:16}} source={require('../assets/images/team.png')}></Image>
                    <Text style={{color:'rgba(73,73,73,1)'}}>我的关注</Text>
                    <View style={{position:'absolute',right:15,flexDirection:'row'}}>
                        <Text style={{fontSize:13,color:'rgba(73,73,73,1)'}}>0</Text>
                        <Image style={{width:16,height:16,marginLeft:5}} source={require('../assets/images/right.png')}></Image>
                    </View>
                </View>
                <View style={{paddingHorizontal:15,paddingVertical:10,flexDirection:'row',marginTop:10,backgroundColor:'#ffffff',position:'relative',alignItems:'center'}}>
                    <Image style={{marginRight:10,width:16,height:16}} source={require('../assets/images/start.png')}></Image>
                    <Text style={{color:'rgba(73,73,73,1)'}}>我的关注</Text>
                    <Image style={{position:'absolute',right:15,width:16,height:16}} source={require('../assets/images/right.png')}></Image>
                </View>
                <Text style={{color: '#282C34',fontSize:16,textAlign:'center',marginTop:10}}>已经全部加载完毕~</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        height: 20,
        marginTop:30,
        marginBottom:15,
        paddingHorizontal:15,
    }
})